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

### Drill ladder (start here)

**15 tiny problems → gradually bigger.** Best if full exercises feel too large.

→ **[drills/README.md](./drills/README.md)** — set 1 (01–15), set 2 (16–30), **tier 4 capstones (31–32)**

```bash
npm run test:drills
npx vitest run drills/01-adult-threshold
npm run reset:drill -- 01-adult-threshold
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
| 18 | `18-can-edit-post` | **Extra rep** — guard clauses (like 15) |
| 19 | `19-login-validation` | **Extra rep** — reuse validators (like 16) |
| 20 | `20-cart-row-summary` | **Extra rep** — cart row formatter (like 17) |
| 21 | `21-plan-label` | **Extra rep** — plan name lookup (like 04) |
| 22 | `22-can-view-profile` | Guard clauses + types |
| 23 | `23-shipping-label` | Shipping label lookup |
| 24 | `24-movie-ticket-price` | Name age tiers + prices |
| 25 | `25-receipt-total` | Types + extract subtotal (**easy 17**) |
| 26 | `26-waitlist-email` | **Easy validation** — one email field |
| 27 | `27-can-delete-comment` | Guard clauses + types |
| 28 | `28-role-badge` | Role label lookup |
| 29 | `29-free-shipping-banner` | Name free-shipping threshold |

Each folder has the code to refactor, a `README.md`, and tests that define the behavior contract. **Do not edit tests** unless you find a genuine bug in them.

**Extra reps (18–29):** fresh unsolved files — practice without resetting folders you already finished.

### What to practice for a 30–45 min screen

| Priority | Folders | Why |
|----------|---------|-----|
| **Do these** | 04, 05, 06, 07, **15**, 10 | One clear smell each; matches live review pacing |
| **Also good** | 01, 02, 03, 08, 09, 11, **17**, **18**, **20** | Same moves, slightly more code |
| **Review track** | **22–29** | Fresh files by difficulty (see below) |
| **Validation** | **26** first, then 14; skip **16/19** until comfortable | Signup/login = two fields, easy to duplicate wrong |
| **Stretch** | 12, 13 | Multi-step (lookup + extra rule / filter + sort) |

### Review track (22–29) — suggested order

| Order | Folder | Time | Pattern |
|-------|--------|------|---------|
| 1 | `28-role-badge` | ~10 min | Lookup |
| 2 | `23-shipping-label` | ~10 min | Lookup |
| 3 | `24-movie-ticket-price` | ~10 min | Magic numbers |
| 4 | `29-free-shipping-banner` | ~10 min | Magic numbers |
| 5 | `25-receipt-total` | ~15 min | Types + extract |
| 6 | `22-can-view-profile` | ~15 min | Guards (like 18) |
| 7 | `27-can-delete-comment` | ~15 min | Guards |
| 8 | `26-waitlist-email` | ~15 min | Easy validation |

```bash
npx vitest run exercises/28-role-badge
npx vitest run exercises/26-waitlist-email
```

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
