# 13 — Avoid mutation

Refactor `reconcileInventory` in `inventory.ts`.

**Focus:** Stop mutating the `warehouse` argument; return new data (copy/spread/immutable merge).

**Constraints:** Keep export and return shape `{ merged, lowStock, totalUnits }`. Tests must pass — including **no mutation** of the input warehouse.

After `npm run reset -- 13-avoid-mutation`, the starter mutates `warehouse` (one test fails until you copy before merging).
