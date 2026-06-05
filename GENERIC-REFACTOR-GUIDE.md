# Generic refactoring guide (build your own study sheet from this)

No exercise numbers — use this in any interview or unfamiliar codebase.

---

## First 5 minutes (always)

1. **Run tests** — green baseline before you edit.
2. **Say behavior out loud** — “Given X, returns Y; false when Z.”
3. **List 2–3 smells max** — don’t rewrite everything.
4. **Ask** — “Keep exports? TS or JS? Tests fixed?”
5. **Pick the smallest first step** — usually types or one extract.

---

## What to do when (decision order)

Use this order unless tests force something else:

| When | Do this | Stop when |
|------|---------|-----------|
| Parameter is `any` / untyped | Type only fields the function **reads** (from tests or call sites) | Tests still pass, no logic change |
| Function mixes calculation + formatting + I/O | Extract **pure math** into a helper with no strings | Tests pass |
| Function mixes validation + submit/save | Extract or reuse **validators**; submit only orchestrates | Tests pass |
| Bare numbers in conditions or math | Name them `const` at top; swap in place | Tests pass |
| Long `if / else if` on fixed strings | Replace with **lookup object** + `??` fallback | Tests pass |
| Nested `if` pyramid returning boolean | **Guard clauses** — early `return false`, one final return | Tests pass |
| Many boolean params | **Options object** (if API can change) or group at top of function | Tests pass |
| Same validation in two places | Call existing helper; delete duplicate checks | Tests pass |

**Rule:** one move → run tests → next move.

---

## Smell → move (generic)

| You see | Do this first |
|---------|----------------|
| `any` | Minimal type from what code actually uses |
| Magic number (`18`, `0.15`, `1000`) | `const MEANINGFUL_NAME = …` |
| Magic string repeated | Named constant or lookup key |
| Nested `if`s, same indent level | Guard clauses (`if (!ok) return …`) |
| `if / else if` on enum-like strings | `Record<string, T>` + `map[key] ?? default` |
| Long function | Extract **one** named chunk; keep export thin |
| Duplicate block (2+ places) | One helper; thin wrappers if API must stay |
| Mutates input argument | Copy first (`{ ...input }` or `[...arr]`), mutate copy |
| `.then` chain | `async/await`; optional extract fetch/error helper |
| Validation copied in handler | Reuse `isValid…` helpers |

---

## Lookup vs type vs extract (don’t mix up)

| Question | Answer |
|----------|--------|
| Mapping input string → output value? | **Lookup object** — not a new `type` |
| Object with fields (`name`, `price`, `items`)? | **`type` / `interface`** |
| Loop or math hidden in a big function? | **Extract function** — returns number or data, not UI strings |
| Formatting (`$`, `.toFixed`, template)? | Keep in **thin outer function** after extract |

**Lookup pattern:** keys = input strings, values = numbers or labels.  
`RESULTS[key] ?? default` — not `if` chain + map both.

**Array typing:** one row type + `Row[]` for the list. Don’t name the list type like a single row.

---

## Guard clause pattern (boolean functions)

```text
if (!precondition) return false;
if (!otherCheck) return false;
return successExpression;   // e.g. age >= MIN_AGE, or combined condition
```

**Common mistake:** early `return true` inside one branch, nothing returned otherwise → `undefined`.

**Fix:** end with **`return booleanExpression`** or explicit **`return false`**.

---

## Validation pattern (forms)

```text
if (!isValidField(a)) return { ok: false, error: "…" };
if (!isValidField(b)) return { ok: false, error: "…" };
return { ok: true, … };
```

**Common mistake:** copying `includes("@")` / length checks inside submit when helpers exist.

**Fix:** one check per field, call helpers only.

---

## Extract pattern (pricing / rows)

```text
1. Type the input (from tests)
2. calculateSubtotal / pure math helper → number
3. Named constants for rates, thresholds, multipliers
4. Optional: getFee(type) or lookup for tiers
5. Outer function: call helpers → build string → return
```

**Order matters:** behavior working → types → extract math → name numbers → lookup → polish.

**Discount:** “10% off” = multiply by **0.9**, not 0.1.

---

## Wiring checklist (after every edit)

- [ ] Did I **assign** (`x = CONSTANT`) or just mention the constant?
- [ ] Does every path **return** the right type (boolean vs number vs object)?
- [ ] Did I **call** the helper I wrote?
- [ ] Did I **remove** the old duplicate logic?
- [ ] For lookups: did I **delete** the old `if` chain?

---

## Test symptoms → likely bug

| Test says | You probably |
|-----------|----------------|
| `expected 18 to be true` | Returned number, not comparison |
| `expected undefined to be false` | Missing final `return` |
| `expected 25 got 30` | Wrong compare (string vs number) or assignment missing |
| `expected "gray" got "grey"` | String mismatch — match tests exactly |
| All logic “right” but helper unused | Duplicate path still in main function |

---

## How to read tests for types (when no docs)

- Top of file: `const x = { field: value }` → shape of one object.
- `fn([{ a: 1 }, { a: 2 }])` → array of that shape.
- `fn(null)` → add `| null` to param type.
- Only type fields the **function body** reads — not the whole domain.

---

## When to stop refactoring

Stop when:

- Tests green
- You can read the main export top-to-bottom
- You fixed 2–3 smells you named at the start

Do **not** need:

- Perfect names
- Every helper extracted
- Lookup if constants + clear `if`s are enough in 30 minutes

---

## Interview script (say out loud)

1. “I’ll run tests first.”
2. “This returns … when …”
3. “I see [smell]; I’ll [one move] first.”
4. *(edit, run tests)*
5. “Next I’d … but I’ll stop here so we keep the diff small.”

---

## Build your personal study sheet

Copy sections into your own doc and add:

- **My wiring mistakes** — blank lines, fill after each practice
- **Patterns I know cold** — guard, lookup, extract, validator (write from memory)
- **Stop rule** — e.g. “Max 3 smells per session”
- **Pre-interview** — read wiring checklist + decision order only

This file is the generic source; your sheet is the shortened version in your words.
