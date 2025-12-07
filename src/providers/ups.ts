import { TrackingRequest } from '../types.js';

const UPS_BASE = 'https://www.ups.com/track';

export function buildUpsLink(req: TrackingRequest): string {
  const params = new URLSearchParams({ trackNums: req.orderId });

  if (req.extra) {
    for (const [key, value] of Object.entries(req.extra)) {
      params.set(key, String(value));
    }
  }

  return `${UPS_BASE}?${params.toString()}`;
}

