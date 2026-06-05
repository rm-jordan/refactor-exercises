# Code review drills (no typing required)

Practice **reading someone else's code** and giving constructive feedback — half of many “refactoring” screens.

## How to run (10–15 min each)

1. Open only the **reference** file listed (unsolved version).
2. Set a timer for 10 minutes.
3. Say out loud (or write in a notes app):

   - **1 positive** — what is clear or correct?
   - **2–3 issues** — smell name + impact + suggested direction (not full code)
   - **1 priority** — what you would change first in a 30-minute slot
   - **1 thing you would not change** — scope control

4. Do **not** open `exercises/` solutions until after.

## Rubric (what interviewers listen for)

- Comments are **specific** (line/behavior), not “this is messy”
- You separate **bug risk** vs **maintainability**
- You mention **tests / edge cases** if there are no tests in front of you
- Tone is collaborative (“we could…”, “I’d suggest…”)

## Drills

| # | File | Likely topics |
|---|------|----------------|
| A | [`reference/06-multiple-responsibilities/register-user.ts`](../reference/06-multiple-responsibilities/register-user.ts) | Multiple responsibilities, order of side effects, `any` |
| B | [`reference/04-conditional-explosion/shipping-cost.ts`](../reference/04-conditional-explosion/shipping-cost.ts) | Conditional explosion, default for unknown types |
| C | [`reference/08-data-clumps/address.ts`](../reference/08-data-clumps/address.ts) | Data clump, duplication across functions |
| D | [`reference/02-long-function/process-order.ts`](../reference/02-long-function/process-order.ts) | Long function, logging mixed with math, `any` |
| E | [`reference/12-order-status-display/order-status.ts`](../reference/12-order-status-display/order-status.ts) | Status if/else chain, UI label/tone mapping |
| G | [`reference/13-messy-list-filter/catalog-filter.ts`](../reference/13-messy-list-filter/catalog-filter.ts) | Imperative filter/sort, magic default, extract helpers |
| F | [`reference/14-duplicate-validation/contact-registration.ts`](../reference/14-duplicate-validation/contact-registration.ts) | Duplicated validation vs helpers |

## Optional: written review template

```
## Summary
(one sentence: what this code does)

## Strengths
-

## Issues
1. [severity] …
2. [severity] …

## Suggested first change
-

## Out of scope for 1h
-
```
