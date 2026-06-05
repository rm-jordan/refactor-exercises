# 20 — Cart row summary (extra rep)

Same move as **17** / **02**: types → extract subtotal → name tax/discount constants → thin formatter.

Refactor `formatCartRowSummary` in `cart-summary.ts`. Keep export and formatted strings. Tests must pass.

## Suggested steps

1. Types from tests  
2. Extract `calculateSubtotal`  
3. Name `0.0825`, `0.95`  
4. Extract tax / member helpers if helpful  
5. Thin main function  
