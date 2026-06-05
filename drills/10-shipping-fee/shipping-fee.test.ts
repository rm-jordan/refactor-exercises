import { describe, expect, it } from "vitest";
import { getShippingFee } from "./shipping-fee.js";

describe("getShippingFee", () => {
  it.each([
    ["standard", 5],
    ["express", 12],
  ] as const)("returns fee for %s", (type, fee) => {
    expect(getShippingFee(type)).toBe(fee);
  });

  it("returns 0 for unknown types", () => {
    expect(getShippingFee("pickup")).toBe(0);
  });
});
