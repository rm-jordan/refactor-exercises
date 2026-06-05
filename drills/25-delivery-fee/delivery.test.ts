import { describe, expect, it } from "vitest";
import { getDeliveryFee } from "./delivery.js";

describe("getDeliveryFee", () => {
  it.each([
    ["standard", 4],
    ["same-day", 12],
  ] as const)("returns fee for %s", (type, fee) => {
    expect(getDeliveryFee(type)).toBe(fee);
  });

  it("returns 0 for unknown types", () => {
    expect(getDeliveryFee("pickup")).toBe(0);
  });
});
