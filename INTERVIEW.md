# Refactoring interview cheat sheet

## What interviewers usually want

- You **understand current behavior** (tests, edge cases).
- You **refactor in safe increments** and can explain each step.
- You **improve readability** without gold-plating architecture.
- You **communicate** while you work: intent, tradeoffs, next step.

## Safe refactoring sequence

1. **Get a safety net** — tests already exist here; run them first.
2. **Rename** for intent (variables, functions) when names lie.
3. **Extract** function or constant when a block has a clear name.
4. **Move** related code together (dedupe only when behavior matches).
5. **Replace** awkward control flow (switch → map, nested if → guard clauses).
6. **Delete** dead code only when tests prove it is unused.

## Phrases that land well

- "I'll run the tests first so we have a baseline."
- "This block calculates X; I'll extract that so the main flow reads top-to-bottom."
- "These two branches duplicate Y; I'll pull Y out only if the behavior is identical."
- "I'm stopping here—further abstraction would hurt readability for this size."

## Red flags (avoid in interviews)

- Rewriting everything at once without running tests.
- Introducing frameworks, DI containers, or new folders without being asked.
- Changing behavior to "make it cleaner" (fixing bugs is OK only if called out).
- Over-abstracting: generic `HandlerFactory` for three lines of logic.
- Editing tests to match your refactor instead of fixing production code.

## Smell → typical move

| Smell | Move |
|-------|------|
| Long function | Extract function |
| Duplicate code | Extract shared function |
| Magic number/string | Named constant |
| Deep nesting | Guard clauses, early return |
| Switch on type | Object/map lookup |
| Long parameter list | Introduce small object/type |
| Feature envy | Move method closer to data it uses |
| Primitive obsession | Small types (when it clarifies) |

## TypeScript-specific tips

- Prefer **narrowing** and **discriminated unions** over `as` casts.
- Extract **types** next to domain concepts (`Order`, `Role`), not "DTO mega-types."
- `readonly` and `as const` are cheap wins when data should not mutate.

## JavaScript-specific tips

- **Pure functions** at the bottom of the file are easy wins in JS exercises.
- Prefer `===`, explicit returns, and consistent `const` / `let`.
- JSDoc is fine in interviews if types are not set up—this project uses `.js` + tests.

## When you're stuck

1. Re-read the **tests** — they document the contract.
2. Pick the **smallest** rename or extract that still feels like progress.
3. Say out loud: "I could do X or Y; I'll choose X because it keeps the diff small."
