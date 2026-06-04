# Code round prep (no behavioral)

For **live code review & refactoring** when you have not seen the codebase before.

## First 10 minutes on alien code

1. **Do not edit yet.** Skim the whole file (and tests if present).
2. **State behavior in plain English** — “Given X, it returns Y; throws when Z.”
3. **Run tests** — `npm test` or the command they give you. Green = your safety net.
4. **List smells** (max 3 for a 1h slot):

   | Smell | You might say |
   |-------|----------------|
   | `any` | “I’d type the inputs.” |
   | Long function | “I’d extract calculation vs side effects.” |
   | Duplicate blocks | “I’d extract one helper.” |
   | if/else on fixed strings | “I’d use a lookup object.” |
   | Magic numbers | “I’d name the business constants.” |
   | Nested ifs | “I’d use guard clauses.” |
   | Repeated parameters | “I’d introduce an Address-like type.” |

5. **Ask two clarifying questions** (always OK):

   - “Should I keep the public API / exports as-is?”
   - “TypeScript or JavaScript?”
   - “Are tests fixed, or can I adjust them if I find a bug?”

6. **Pick the smallest first refactor** — usually types or extract one pure function — then run tests again.

## If it is JavaScript (not TypeScript)

Same refactors. Skip interfaces; use JSDoc only if you want. Practice: [`exercises-js/`](./exercises-js/) (04, 05, 07). Cheat sheet: [`CHEAT-SHEET.md`](./CHEAT-SHEET.md) or print [`cheat-sheet.html`](./cheat-sheet.html).

## If it is React (less common for “refactoring” rounds)

Same smells, different shape:

- Huge component → split or extract subcomponents
- Props list repeated → group props / type props
- Nested ternaries in JSX → early return or variables
- Data fetch + UI + analytics in one `useEffect` → split responsibilities

Do **not** assume React unless they say so. Your `exercises/` folder is the main prep.

## If they want review only (no refactor)

See [`review/`](./review/). Practice 10 minutes of **comments only** on `reference/` files.

## If you feel blindsided

- You are not expected to know the repo.
- Tests (or examples) **are** the spec.
- Narrating beats silent perfect code.
- One good refactor > a half-finished rewrite.

## Repo practice path

| When | What |
|------|------|
| Once | [`mock/50-minute-live.md`](./mock/50-minute-live.md) |
| Before interview | [`exercises/10-capstone-quote`](./exercises/10-capstone-quote) (fresh mess) |
| Repeat drills | `npm run reset -- 04` then refactor from scratch |
| Review voice | [`review/`](./review/) |
