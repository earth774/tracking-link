import { TrackingRequest } from '../types.js';

const FEDEX_BASE = 'https://www.fedex.com/fedextrack';

export function buildFedexLink(req: TrackingRequest): string {
  const params = new URLSearchParams({ trknbr: req.orderId });

  if (req.extra) {
    for (const [key, value] of Object.entries(req.extra)) {
      params.set(key, String(value));
    }
  }

  return `${FEDEX_BASE}?${params.toString()}`;
}
