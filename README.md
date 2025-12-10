# Tracking Link

Helper utilities for generating outbound tracking URLs for supported carriers. The library exposes small builder functions plus a unified `buildTrackingLink` helper.

## Installation

```bash
npm install tracking-link
```

## Usage

```ts
import { buildTrackingLink } from 'tracking-link';

const url = buildTrackingLink({
  carrier: 'th-post',
  orderId: 'TH1234567890',
  extra: { locale: 'th' },
});

// https://track.thailandpost.co.th/?trackNumber=TH1234567890&locale=th
```

### Direct builder imports

If you prefer calling a provider directly:

```ts
import {
  buildBestLink,
  buildDhlLink,
  buildDhlEcomLink,
  buildFedexLink,
  buildFlashLink,
  buildGrabLink,
  buildJtexLink,
  buildKerryLink,
  buildNimLink,
  buildScgLink,
  buildTntLink,
  buildThailandPostLink,
  buildUpsLink,
} from 'tracking-link';
```

### Types

`TrackingRequest`:

- `carrier`: one of `'best' | 'dhl' | 'dhl-ecom' | 'fedex' | 'flash' | 'grab' | 'jtex' | 'kerry' | 'nim' | 'scg' | 'tnt' | 'ups' | 'th-post'`
- `orderId`: tracking number or reference to embed in the URL
- `extra?`: optional record of extra query parameters (string or number values)

## Providers

| Provider      | Carrier key | Status    |
| ------------- | ----------- | --------- |
| DHL           | `dhl`       | Supported |
| DHL eCommerce | `dhl-ecom`  | Supported |
| FedEx         | `fedex`     | Supported |
| Flash Express | `flash`     | Supported |
| Grab Express  | `grab`      | Supported |
| J&T Express   | `jtex`      | Supported |
| Kerry Express | `kerry`     | Supported |
| SCG EXPRESS   | `scg`       | Supported |
| TNT           | `tnt`       | Supported |
| Nim Express   | `nim`       | Supported |
| UPS           | `ups`       | Supported |
| Thailand Post | `th-post`   | Supported |
| Best Express  | `best`      | Supported |

## Scripts

- `npm run build` — compile to `dist`
- `npm test` — run unit tests (Vitest)
- `npm run lint` — lint TypeScript
- `npm run format` — check formatting (`format:write` to apply)

## Contributing

Pull requests for new carriers are welcome. Add a new builder under `src/providers/`, update `Carrier` and `buildTrackingLink`, and cover the behavior with tests under `tests/`.
