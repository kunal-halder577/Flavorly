import { proxyRequest } from "../../proxyApi";

export default async function handler(req, res) {
  const result = await proxyRequest(req);
  return res.status(result.status).json(result.data);
}