import { TrackingRequest } from '../types.js';

const NIM_BASE = 'http://www.nimexpress.com/web/p/tracking';

export function buildNimLink(req: TrackingRequest): string {
  const params = new URLSearchParams({ i: req.orderId });

  if (req.extra) {
    for (const [key, value] of Object.entries(req.extra)) {
      params.set(key, String(value));
    }
  }

  return `${NIM_BASE}?${params.toString()}`;
}
