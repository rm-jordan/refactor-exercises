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

---

## Set 2 — Tomorrow (16–30)

Same ladder, **new files**. Patterns match set 1 — muscle memory, not new concepts.

```bash
npx vitest run drills/16-senior-discount
npm run reset:drill -- 16-senior-discount
```

### Set 2 — Tier 1 (micro)

| # | Folder | Same move as |
|---|--------|--------------|
| 16 | `16-senior-discount` | 01 — magic number |
| 17 | `17-non-empty-guard` | 02 — guards |
| 18 | `18-product-name-type` | 03 — type `any` |
| 19 | `19-connection-label` | 04 — lookup |
| 20 | `20-join-waitlist` | 05 — call validator |

### Set 2 — Tier 2 (small)

| # | Folder | Same move as |
|---|--------|--------------|
| 21 | `21-can-moderate` | 06 — guards + types |
| 22 | `22-severity-label` | 07 — lookup |
| 23 | `23-basket-subtotal` | 08 — extract subtotal |
| 24 | `24-parking-fee` | 09 — magic numbers |
| 25 | `25-delivery-fee` | 10 — name fees |

### Set 2 — Tier 3 (medium)

| # | Folder | Same move as |
|---|--------|--------------|
| 26 | `26-can-pin-post` | 11/18 — guards + 2 types |
| 27 | `27-license-badge` | 12 — lookup |
| 28 | `28-invoice-line` | 13 — types + extract |
| 29 | `29-quote-line` | 14 — subtotal + fee |
| 30 | `30-checkout-line` | 15/20 — tax + loyalty |

**Tomorrow plan:** 16→20 (tier 1), break, 21→25, optional 26→30 if energy left.

---

## Tier 4 — Full screen (~25–30 min each)

Do **after** set 2. Same skills stacked in longer files — closer to a live interview.

| # | Folder | You practice |
|---|--------|--------------|
| 31 | `31-long-function` | Types + magic number + extract pricing (`exercises/02`) |
| 32 | `32-capstone-quote` | Mixed smells — constants + extract + orchestrate (`exercises/10`) |

```bash
npx vitest run drills/31-long-function
npm run reset:drill -- 31-long-function
```

## After the ladder

| Ready for | Go to |
|-----------|--------|
| Guards | `15`, `18`, `22`, `27` |
| Lookup | `04`, `21`, `23`, `28` |
| Row formatters | `17`, `20`, `25` |
| Validation | `26`, then `14` |
| Full screen | `31`, `32`, then `exercises/10` |

Unsolved copies: [`reference-drills/`](../reference-drills/)
