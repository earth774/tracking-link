import { TrackingRequest } from '../types.js';

const JTEX_BASE = 'https://www.jtexpress.co.th/index/query/gzquery.html';

export function buildJtexLink(req: TrackingRequest): string {
  const params = new URLSearchParams({ bills: req.orderId });

  if (req.extra) {
    for (const [key, value] of Object.entries(req.extra)) {
      params.set(key, String(value));
    }
  }

  return `${JTEX_BASE}?${params.toString()}`;
}
