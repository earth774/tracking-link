import { TrackingRequest } from '../types.js';

const SCG_BASE = 'https://www.scgexpress.co.th/tracking/';

export function buildScgLink(req: TrackingRequest): string {
  const params = new URLSearchParams({ tracking_search: req.orderId });

  if (req.extra) {
    for (const [key, value] of Object.entries(req.extra)) {
      params.set(key, String(value));
    }
  }

  return `${SCG_BASE}?${params.toString()}`;
}
