# 17 — Order row summary

Refactor `formatOrderRowSummary` in `order-summary.ts`.

**Focus:** Types for order/items, name shipping rates + VIP multiplier, extract subtotal math, extract shipping + VIP helpers, thin formatter.

**Constraints:** Keep export and formatted strings exactly. Tests must pass.

**Interview note:** Table/list UI code — math + string formatting + magic numbers in one function.

## Refactor steps (in order)

1. **Types** — `OrderItem`, `Order` from tests; replace `any`
2. **Constants** — `STANDARD_SHIPPING_COST`, `EXPRESS_SHIPPING_COST`, `OVERNIGHT_SHIPPING_COST`, `VIP_DISCOUNT_MULTIPLIER` (0.9 = 10% off)
3. **Extract `calculateSubtotal`** — pure line-item math only
4. **Extract `getShippingCost`** — type string → cost; unknown → `0`
5. **Extract `getDisplayTotal`** — VIP multiplier on total
6. **Thin `formatOrderRowSummary`** — orchestrate + build row strings only

Run tests after each step.
