const limits = new Map<string, number>(); // IP -> last request time
const RATE_LIMIT_MS = 60000; // 1 min

export function rateLimit(ip: string): boolean {
  const now = Date.now();
  const last = limits.get(ip) || 0;
  if (now - last < RATE_LIMIT_MS) return false;
  limits.set(ip, now);
  return true;
}