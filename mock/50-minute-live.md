# 50-minute live simulation

Simulates **unknown code + refactor under time pressure**. Do this once before the real screen.

## Setup

```bash
npm run reset -- 10-capstone-quote   # fresh capstone only
# OR pick a number 01–09 you already solved
npm run reset -- 06
npm test                              # baseline green
```

Disable Cursor Tab / autocomplete if you want interview realism.

## Timeline

| Minutes | Activity |
|---------|----------|
| 0–8 | Read code + tests. Say behavior out loud. List 3 smells. |
| 8–10 | Say your first step; ask imaginary interviewer “keep exports?” |
| 10–40 | Refactor in small steps. Run `npx vitest run <exercise-folder>` after each step. |
| 40–45 | Run `npm run check` |
| 45–50 | Verbal recap: what changed, what you’d do next, what you skipped |

## Pass criteria (self-score)

- [ ] Tests green at end
- [ ] You did not rewrite in one giant paste
- [ ] You spoke reasoning at least 3 times
- [ ] Public exports unchanged (unless capstone README says otherwise)
- [ ] At least 2 distinct smell types addressed (e.g. types + extract, or lookup + constants)

## If you freeze

Say: “I’ll run tests, then extract the pure calculation first.”  
Open [`PREP-CODE.md`](../PREP-CODE.md) only **after** the mock if you need the smell table.

## Suggested exercises for mock

| Difficulty | Reset target |
|------------|----------------|
| Medium | `06-multiple-responsibilities` |
| Medium | `02-long-function` |
| Hard (unseen) | `10-capstone-quote` |
