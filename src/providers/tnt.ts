import { TrackingRequest } from '../types.js';

const TNT_BASE =
  'https://www.tnt.com/express/en_th/site/shipping-tools/tracking.html';

export function buildTntLink(req: TrackingRequest): string {
  const params = new URLSearchParams({ searchType: 'CON', cons: req.orderId });

  if (req.extra) {
    for (const [key, value] of Object.entries(req.extra)) {
      params.set(key, String(value));
    }
  }

  return `${TNT_BASE}?${params.toString()}`;
}
