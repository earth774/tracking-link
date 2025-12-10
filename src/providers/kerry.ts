import { TrackingRequest } from '../types.js';

const KERRY_BASE = 'https://th.kerryexpress.com/en/track/';

export function buildKerryLink(req: TrackingRequest): string {
  const params = new URLSearchParams({ track: req.orderId });

  if (req.extra) {
    for (const [key, value] of Object.entries(req.extra)) {
      params.set(key, String(value));
    }
  }

  return `${KERRY_BASE}?${params.toString()}`;
}
