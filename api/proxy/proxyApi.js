// utils/apiProxy.js
import { TransactionalEmailsApi, SendSmtpEmail } from "@getbrevo/brevo";

let currentKeyIndex = 0;
let lastNotificationTime = 0;

const RETRY_STATUS_CODES = [402, 401, 429];
const RETURN_DIRECTLY_CODES = [404, 403];
const NOTIFY_COOLDOWN = 1000 * 60 * 10;

const keys = [
  process.env.API_KEY_1,
  process.env.API_KEY_2,
  process.env.API_KEY_3,
  process.env.API_KEY_4
];

// 🔹 Setup Brevo client once
const emailAPI = new TransactionalEmailsApi();
emailAPI.authentications.apiKey.apiKey = process.env.BREVO_API_KEY;

async function notifyAdmin(errorMessage) {
  const now = Date.now();
  if (now - lastNotificationTime < NOTIFY_COOLDOWN) {
    console.log("Skipping duplicate notification.");
    return;
  }
  lastNotificationTime = now;

  const message = new SendSmtpEmail();
  message.subject = "🚨 All API Keys Exhausted!";
  message.htmlContent = `<p>${errorMessage}</p>`;
  message.sender = { name: "API Monitor", email: "kunalhalder077@gmail.com" };
  message.to = [{ email: "kunalhalder577@gmail.com", name: "Admin" }];

  try {
    await emailAPI.sendTransacEmail(message);
    console.log("Notification sent.");
  } catch (err) {
    console.error("Error sending email:", err.body || err);
  }
}

export async function proxyRequest(req) {
  const requestUrl = new URL(req.url, `http://${req.headers.host}`);
  const path = requestUrl.pathname.replace(/^\/api\/proxy\//, "");
  const query = new URLSearchParams(requestUrl.search);

  let response;
  for (let i = 0; i < keys.length; i++) {
    query.set("apiKey", keys[currentKeyIndex]);
    const targetUrl = `https://api.spoonacular.com/${path}?${query.toString()}`;

    response = await fetch(targetUrl, {
      method: req.method,
      headers: req.method === "GET" ? {} : { "Content-Type": "application/json" },
    });

    if (RETURN_DIRECTLY_CODES.includes(response.status)) {
      return { status: response.status, data: await response.json() };
    }
    if (!RETRY_STATUS_CODES.includes(response.status)) {
      return { status: response.status, data: await response.json() };
    }
    // Rotate key
    currentKeyIndex = (currentKeyIndex + 1) % keys.length;
  }

  // 🔴 All keys exhausted
  await notifyAdmin("All API keys exhausted. Please refresh quota or add new keys.");
  return { status: 402, data: { error: "All API keys exhausted" } };
}
