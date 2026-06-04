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

Each folder has the code to refactor, a `README.md`, and tests that define the behavior contract. **Do not edit tests** unless you find a genuine bug in them.

ESLint is configured for TypeScript (`npm run lint`). Install the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension in Cursor/VS Code for inline diagnostics.

Unsolved starting copies (no tests) live in [`reference/`](./reference/) for comparison or reset.

See [INTERVIEW.md](./INTERVIEW.md) for refactoring tips and interview phrasing.

## Workflow

1. Run tests for the exercise (baseline should pass).
2. Refactor in small steps; re-run tests after each step.
3. Stop when readability is clearly better—avoid over-engineering.
