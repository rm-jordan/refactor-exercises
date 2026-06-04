import { describe, expect, it } from "vitest";
import { reconcileInventory } from "./inventory.js";

describe("reconcileInventory", () => {
  it("merges shipment into warehouse counts", () => {
    const warehouse = { A: 10, B: 2 };
    const result = reconcileInventory(warehouse, [
      { sku: "A", qty: 5 },
      { sku: "B", qty: 1 },
      { sku: "C", qty: 3 },
    ]);
    expect(result.merged).toEqual({ A: 15, B: 3, C: 3 });
    expect(result.lowStock).toEqual(["B", "C"]);
    expect(result.totalUnits).toBe(21);
  });

  it("does not mutate the original warehouse object", () => {
    const warehouse = { A: 10 };
    const snapshot = { ...warehouse };
    reconcileInventory(warehouse, [{ sku: "A", qty: 5 }]);
    expect(warehouse).toEqual(snapshot);
  });
});
