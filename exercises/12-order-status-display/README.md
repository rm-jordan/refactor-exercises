# 12 — Order status display

Refactor `getOrderStatusDisplay` in `order-status.ts`.

**Focus:** Replace the status `if/else` chain with a lookup; extract premium label logic if helpful.

**Constraints:** Keep export signature `(status, isPremium)` and return shape `{ label, tone, showTracking }`. Tests must pass.

**Interview note:** Very common frontend shape — map API status codes to badge label + variant.
