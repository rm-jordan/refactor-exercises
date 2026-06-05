# Drill ladder

**Small problems that get bigger.** One or two smells per drill. Run tests after every change.

```bash
npx vitest run drills/01-adult-threshold
npx vitest run drills                    # all drills
npm run reset:drill -- 01-adult-threshold
```

## How to use

1. Start at **01** — do not skip tier 1 unless tests are boringly easy.
2. Run tests before and after each edit.
3. Finish when tests pass and you can name the smell out loud.
4. Move to the next number only when the current drill feels routine.

## Tier 1 — Micro (~5 min each, one move)

| # | Folder | You practice |
|---|--------|--------------|
| 01 | `01-adult-threshold` | Name one magic number |
| 02 | `02-positive-guard` | One guard clause |
| 03 | `03-greet-user-type` | Type one `any` param |
| 04 | `04-status-color-lookup` | Lookup with 2 keys |
| 05 | `05-subscribe-email` | Reuse one validator (email only) |

## Tier 2 — Small (~10 min each)

| # | Folder | You practice |
|---|--------|--------------|
| 06 | `06-can-vote` | Guard clauses (2–3 checks) |
| 07 | `07-priority-label` | Lookup + default |
| 08 | `08-line-total` | Extract subtotal loop |
| 09 | `09-bus-fare` | Two age constants |
| 10 | `10-shipping-fee` | Name costs + simple if/else |

## Tier 3 — Medium (~15 min each, bridges to `exercises/`)

| # | Folder | You practice |
|---|--------|--------------|
| 11 | `11-view-draft` | Types + guards (mini 18/22) |
| 12 | `12-tier-badge` | Lookup table |
| 13 | `13-receipt-line` | Types + extract (mini 25) |
| 14 | `14-order-line` | Subtotal + shipping constant (mini 17) |
| 15 | `15-cart-tax-line` | Subtotal + tax + member (mini 20) |

## After the ladder

| Ready for | Go to |
|-----------|--------|
| Guards | `15`, `18`, `22`, `27` |
| Lookup | `04`, `21`, `23`, `28` |
| Row formatters | `17`, `20`, `25` |
| Validation | `26`, then `14` |
| Full screen | `10` capstone |

Unsolved copies: [`reference-drills/`](../reference-drills/)
