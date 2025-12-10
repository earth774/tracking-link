import { TrackingRequest } from '../types.js';

const TH_POST_BASE = 'https://track.thailandpost.co.th/';

export function buildThailandPostLink(req: TrackingRequest): string {
  const params = new URLSearchParams({ trackNumber: req.orderId });

  if (req.extra) {
    for (const [key, value] of Object.entries(req.extra)) {
      params.set(key, String(value));
    }
  }

  return `${TH_POST_BASE}?${params.toString()}`;
}
