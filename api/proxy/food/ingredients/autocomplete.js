let currentKeyIndex = 0;

const RETRY_STATUS_CODES = [402, 401, 429];
const RETURN_DIRECTLY_CODES = [404, 403];

const keys = [
  process.env.API_KEY_1,
  process.env.API_KEY_2,
  process.env.API_KEY_3,
  process.env.API_KEY_4
];

export default async function handler(req, res) {
  try {
    // Parse URL
    const requestUrl = new URL(req.url, `http://${req.headers.host}`);
    const path = requestUrl.pathname.replace(/^\/api\/proxy\//, "");
    const query = requestUrl.searchParams;

    // Always include apiKey
    query.set("apiKey", keys[currentKeyIndex]);

    const targetUrl = `https://api.spoonacular.com/${path}?${query.toString()}`;
    console.log("Incoming URL:", req.url);
    console.log("Target URL:", targetUrl);
    console.log("Using key:", keys[currentKeyIndex]);


    // First attempt
    let response = await fetch(targetUrl, {
      method: req.method,
      headers: { "Content-Type": "application/json" },
    });

    // Rotate key if quota exceeded
    if (RETRY_STATUS_CODES.includes(response.status)) {
      currentKeyIndex = (currentKeyIndex + 1) % keys.length;
      query.set("apiKey", keys[currentKeyIndex]);
      const retryUrl = `https://api.spoonacular.com/${path}?${query.toString()}`;

      response = await fetch(retryUrl, {
        method: req.method,
        headers: { "Content-Type": "application/json" },
      });
    } else if (RETURN_DIRECTLY_CODES.includes(response.status)) {
      return res.status(response.status).json(await response.json());
    }

    const data = await response.json();
    return res.status(response.status).json(data);

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
