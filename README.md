# Refactor Practice

Practice **safe refactoring** in TypeScript for technical interviews: improve code while keeping tests green.

## Quick start

```bash
npm install
npm test
npm run test:watch
npm run lint
```

Run one exercise:

```bash
npx vitest run exercises/01-types-and-readability
```

## Exercises

| # | Folder | Focus |
|---|--------|--------|
| 1 | `01-types-and-readability` | Types and readability (`getActiveUsers`) |
| 2 | `02-long-function` | Break up `processOrder` |
| 3 | `03-duplicate-logic` | Deduplicate display name helpers |
| 4 | `04-conditional-explosion` | Replace shipping type if/else chain |
| 5 | `05-magic-numbers` | Name age thresholds |
| 6 | `06-multiple-responsibilities` | Split `registerUser` concerns |
| 7 | `07-nested-conditionals` | Flatten `processPayment` |
| 8 | `08-data-clumps` | Group address parameters |
| 9 | `09-hidden-business-rule` | Surface loyalty discount rules |
| 10 | `10-capstone-quote` | **Mixed smells** — simulate unfamiliar live code |
| 11 | `11-flag-arguments` | Boolean flags → options object |
| 12 | `12-order-status-display` | Status → badge label/tone (lookup table) |
| 13 | `13-messy-list-filter` | Filter + sort list for UI (extract helpers) |
| 14 | `14-duplicate-validation` | Reuse validators in `registerContact` |
| 15 | `15-guard-clauses-auth` | Flatten “show admin nav?” permission checks |
| 16 | `16-signup-validation` | Signup form reuses email/password validators |
| 17 | `17-order-row-summary` | Order table row — extract math, shipping lookup |

Each folder has the code to refactor, a `README.md`, and tests that define the behavior contract. **Do not edit tests** unless you find a genuine bug in them.

### What to practice for a 30–45 min screen

| Priority | Folders | Why |
|----------|---------|-----|
| **Do these** | 04, 05, 06, 07, 14, **15**, **16**, 10 | One clear smell each; matches live review pacing |
| **Also good** | 01, 02, 03, 08, 09, 11, **17** | Same moves, slightly more code |
| **Stretch** | 12, 13 | Multi-step (lookup + extra rule / filter + sort) |

### Code interview prep (not behavioral)

- **[PREP-CODE.md](./PREP-CODE.md)** — first 10 minutes on code you have never seen
- **[review/](./review/)** — verbal code review drills on `reference/` files
- **[mock/50-minute-live.md](./mock/50-minute-live.md)** — timed full run
- **Reset an exercise:** `npm run reset -- 04-conditional-explosion` (copies `reference/` → `exercises/`, keeps tests)
- **[CHEAT-SHEET.md](./CHEAT-SHEET.md)** — if you see X, do Y ([print PDF](./cheat-sheet.html))
- **[exercises-js/](./exercises-js/)** — plain JavaScript (04, 05, 07, 11, 12, 13 mirrors)
- **[exercises-react/](./exercises-react/)** — optional React component refactor (frontend roles)

ESLint is configured for TypeScript (`npm run lint`). Install the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension in Cursor/VS Code for inline diagnostics.

Unsolved starting copies (no tests) live in [`reference/`](./reference/) for comparison or reset.

See [INTERVIEW.md](./INTERVIEW.md) for refactoring tips and interview phrasing.

## Workflow

1. Run tests for the exercise (baseline should pass).
2. Refactor in small steps; re-run tests after each step.
3. Stop when readability is clearly better—avoid over-engineering.
