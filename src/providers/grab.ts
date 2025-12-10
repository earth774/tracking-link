import { TrackingRequest } from '../types.js';

const GRAB_BASE = 'http://th.grabexpress.com/tracking.php';

export function buildGrabLink(req: TrackingRequest): string {
  const params = new URLSearchParams({ trackingId: req.orderId });

  if (req.extra) {
    for (const [key, value] of Object.entries(req.extra)) {
      params.set(key, String(value));
    }
  }

  return `${GRAB_BASE}?${params.toString()}`;
}
