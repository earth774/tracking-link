import { buildBestLink } from './providers/best.js';
import { buildDhlEcomLink } from './providers/dhl-ecom.js';
import { buildDhlLink } from './providers/dhl.js';
import { buildFedexLink } from './providers/fedex.js';
import { buildFlashLink } from './providers/flash.js';
import { buildGrabLink } from './providers/grab.js';
import { buildJtexLink } from './providers/jtex.js';
import { buildKerryLink } from './providers/kerry.js';
import { buildNimLink } from './providers/nim.js';
import { buildScgLink } from './providers/scg.js';
import { buildThailandPostLink } from './providers/th-post.js';
import { buildTntLink } from './providers/tnt.js';
import { buildUpsLink } from './providers/ups.js';
import { TrackingRequest } from './types.js';

export function buildTrackingLink(req: TrackingRequest): string {
  switch (req.carrier) {
    case 'best':
      return buildBestLink(req);
    case 'dhl':
      return buildDhlLink(req);
    case 'dhl-ecom':
      return buildDhlEcomLink(req);
    case 'fedex':
      return buildFedexLink(req);
    case 'flash':
      return buildFlashLink(req);
    case 'grab':
      return buildGrabLink(req);
    case 'jtex':
      return buildJtexLink(req);
    case 'kerry':
      return buildKerryLink(req);
    case 'nim':
      return buildNimLink(req);
    case 'scg':
      return buildScgLink(req);
    case 'tnt':
      return buildTntLink(req);
    case 'ups':
      return buildUpsLink(req);
    case 'th-post':
      return buildThailandPostLink(req);
    default: {
      // Exhaustiveness guard; TypeScript should prevent reaching here
      const unreachable: never = req.carrier;
      throw new Error(`Unsupported carrier: ${String(unreachable)}`);
    }
  }
}
