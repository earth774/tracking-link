# Project Context: @amiearth/tracking-link

## 1. Project Overview

**@amiearth/tracking-link** is a TypeScript utility library designed to generate outbound tracking URLs for various logistics carriers (DHL, FedEx, UPS, Thailand Post, Kerry Express, J&T, etc.). It provides a unified interface (`buildTrackingLink`) as well as individual builder functions.

## 2. Technical Stack

- **Language:** TypeScript (Target: ES2020, Module: ESNext)
- **Runtime:** Node.js
- **Package Manager:** npm
- **Testing:** Vitest
- **Linting:** ESLint (Flat Config) + TypeScript-ESLint
- **Formatting:** Prettier
- **CI/CD:** GitHub Actions

## 3. Directory Structure

```text
/
├── .github/workflows/   # CI/CD pipelines
├── dist/                # Compiled output (Git-ignored)
├── src/
│   ├── providers/       # Individual carrier logic (one file per carrier)
│   ├── index.ts         # Main entry point (exports)
│   ├── trackingLink.ts  # Main dispatch logic (switch-case)
│   └── types.ts         # Type definitions (Carrier, TrackingRequest)
├── tests/               # Unit tests
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── eslint.config.js     # Linter configuration
```

## 4. Key Workflows & Commands

### Development

- **Install Dependencies:** `npm install`
- **Build:** `npm run build` (compiles to `dist/`)
- **Clean:** `npm run clean`

### Quality Assurance

- **Test:** `npm test` (Runs Vitest)
- **Test Coverage:** `npm run test:coverage`
- **Lint:** `npm run lint`
- **Format Check:** `npm run format`
- **Format Fix:** `npm run format:write`

### Publishing

- **Patch Release:** `npm run publish:patch`
- **Minor Release:** `npm run publish:minor`
- **Major Release:** `npm run publish:major`

## 5. Implementation Guidelines

### Architecture Pattern

The project uses a **Strategy Pattern** where each carrier is a separate "provider".

- **Types:** Defined in `src/types.ts`.
- **Dispatcher:** `src/trackingLink.ts` acts as the central hub, switching based on the `carrier` string.
- **Providers:** Located in `src/providers/`. Each file exports a specific builder function (e.g., `buildDhlLink`).

### How to Add a New Carrier

To add support for a new carrier (e.g., "New Express"), follow these strict steps:

1.  **Create Provider:**
    Create `src/providers/new-express.ts`:

    ```typescript
    import { TrackingRequest } from '../types.js';

    export function buildNewExpressLink(req: TrackingRequest): string {
      // Implementation logic
      return `https://example.com/track?id=${req.orderId}`;
    }
    ```

2.  **Update Types:**
    Modify `src/types.ts` to add the carrier key:

    ```typescript
    export type Carrier = 'dhl' | 'fedex' | ... | 'new-express';
    ```

3.  **Update Dispatcher:**
    Modify `src/trackingLink.ts` to handle the new case:

    ```typescript
    case 'new-express':
      return buildNewExpressLink(req);
    ```

4.  **Export:**
    Export the new builder in `src/index.ts`:

    ```typescript
    export { buildNewExpressLink } from './providers/new-express.js';
    ```

5.  **Add Tests:**
    Add a test case in `tests/trackingLink.test.ts`:
    ```typescript
    it('builds New Express link', () => {
      const url = buildTrackingLink({ carrier: 'new-express', orderId: '123' });
      expect(url).toContain('...');
    });
    ```

## 6. Current Supported Carriers

| Carrier Key | Provider File               | Status         |
| :---------- | :-------------------------- | :------------- |
| `best`      | `src/providers/best.ts`     | ✅ Implemented |
| `dhl`       | `src/providers/dhl.ts`      | ✅ Implemented |
| `dhl-ecom`  | `src/providers/dhl-ecom.ts` | ✅ Implemented |
| `fedex`     | `src/providers/fedex.ts`    | ✅ Implemented |
| `flash`     | `src/providers/flash.ts`    | ✅ Implemented |
| `grab`      | `src/providers/grab.ts`     | ✅ Implemented |
| `jtex`      | `src/providers/jtex.ts`     | ✅ Implemented |
| `kerry`     | `src/providers/kerry.ts`    | ✅ Implemented |
| `nim`       | `src/providers/nim.ts`      | ✅ Implemented |
| `scg`       | `src/providers/scg.ts`      | ✅ Implemented |
| `th-post`   | `src/providers/th-post.ts`  | ✅ Implemented |
| `tnt`       | `src/providers/tnt.ts`      | ✅ Implemented |
| `ups`       | `src/providers/ups.ts`      | ✅ Implemented |

## 7. Configuration Details

- **`package.json` Exports:** Configured for modern Node.js support (`"."` export with `types` and `import`).
- **ESLint:** Uses Flat Config format (`eslint.config.js`) with TypeScript support.
