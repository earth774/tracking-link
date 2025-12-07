import { buildDhlLink } from './providers/dhl.js';
import { buildFedexLink } from './providers/fedex.js';
import { buildUpsLink } from './providers/ups.js';
import { TrackingRequest } from './types.js';

export function buildTrackingLink(req: TrackingRequest): string {
  switch (req.carrier) {
    case 'dhl':
      return buildDhlLink(req);
    case 'fedex':
      return buildFedexLink(req);
    case 'ups':
      return buildUpsLink(req);
    default: {
      // Exhaustiveness guard; TypeScript should prevent reaching here
      const unreachable: never = req.carrier;
      throw new Error(`Unsupported carrier: ${String(unreachable)}`);
    }
  }
}

