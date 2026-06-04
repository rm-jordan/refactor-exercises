import { describe, expect, it } from "vitest";
import { getShippingCost } from "./shipping-cost.js";

describe("getShippingCost", () => {
  it.each([
    ["standard", 10],
    ["express", 20],
    ["priority", 30],
    ["overnight", 50],
  ] as const)("returns %i for %s", (type, cost) => {
    expect(getShippingCost(type)).toBe(cost);
  });

  it("returns 0 for unknown shipping types", () => {
    expect(getShippingCost("economy")).toBe(0);
    expect(getShippingCost("")).toBe(0);
  });
});
