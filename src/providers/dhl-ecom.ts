import { TrackingRequest } from '../types.js';

const DHL_ECOM_BASE = 'https://ecommerceportal.dhl.com/track/';

export function buildDhlEcomLink(req: TrackingRequest): string {
  const params = new URLSearchParams({ ref: req.orderId });

  if (req.extra) {
    for (const [key, value] of Object.entries(req.extra)) {
      params.set(key, String(value));
    }
  }

  return `${DHL_ECOM_BASE}?${params.toString()}`;
}
