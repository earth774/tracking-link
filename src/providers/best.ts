import { TrackingRequest } from '../types.js';

const BEST_BASE = 'https://www.best-inc.co.th/track';

export function buildBestLink(req: TrackingRequest): string {
  const params = new URLSearchParams({ bills: req.orderId });

  if (req.extra) {
    for (const [key, value] of Object.entries(req.extra)) {
      params.set(key, String(value));
    }
  }

  return `${BEST_BASE}?${params.toString()}`;
}
