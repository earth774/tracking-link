import { TrackingRequest } from '../types.js';

const DHL_BASE = 'https://www.dhl.com/th-en/home/tracking.html';

export function buildDhlLink(req: TrackingRequest): string {
  const params = new URLSearchParams({ 'tracking-id': req.orderId });

  if (req.extra) {
    for (const [key, value] of Object.entries(req.extra)) {
      params.set(key, String(value));
    }
  }

  return `${DHL_BASE}?${params.toString()}`;
}
