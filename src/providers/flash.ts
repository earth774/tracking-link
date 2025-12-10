import { TrackingRequest } from '../types.js';

const FLASH_BASE = 'https://www.flashexpress.com/tracking/';

export function buildFlashLink(req: TrackingRequest): string {
  const params = new URLSearchParams({ se: req.orderId });

  if (req.extra) {
    for (const [key, value] of Object.entries(req.extra)) {
      params.set(key, String(value));
    }
  }

  return `${FLASH_BASE}?${params.toString()}`;
}
