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
  carrier: 'dhl',
  orderId: '1234567890',
  extra: { locale: 'th', source: 'app' }
});

// https://www.dhl.com/th-en/home/tracking.html?tracking-id=1234567890&locale=th&source=app
```

### Direct builder imports

If you prefer calling a provider directly:

```ts
import { buildDhlLink, buildFedexLink, buildUpsLink } from 'tracking-link';
```

### Types

`TrackingRequest`:

- `carrier`: one of `'dhl' | 'fedex' | 'ups'`
- `orderId`: tracking number or reference to embed in the URL
- `extra?`: optional record of extra query parameters (string or number values)

## Providers

| Provider          | Carrier key | Status     |
| ----------------- | ----------- | ---------- |
| DHL               | `dhl`       | Supported  |
| FedEx             | `fedex`     | Supported  |
| UPS               | `ups`       | Supported  |
| Thailand Post     | `th-post`   | Waiting    |
| DHL eCommerce     | `dhl-ecom`  | Waiting    |
| Flash Express     | `flash`     | Waiting    |
| J&T Express       | `jtex`      | Waiting    |
| Kerry Express     | `kerry`     | Waiting    |
| Grab Express      | `grab`      | Waiting    |
| SCG EXPRESS       | `scg`       | Waiting    |
| Nim Express       | `nim`       | Waiting    |
| TNT               | `tnt`       | Waiting    |
| Best Express      | `best`      | Waiting    |

## Scripts

- `npm run build` — compile to `dist`
- `npm test` — run unit tests (Vitest)
- `npm run lint` — lint TypeScript
- `npm run format` — check formatting (`format:write` to apply)

## Contributing

Pull requests for new carriers are welcome. Add a new builder under `src/providers/`, update `Carrier` and `buildTrackingLink`, and cover the behavior with tests under `tests/`.


