import { describe, expect, it } from "vitest";
import { formatOrderRowSummary } from "./order-summary.js";

describe("formatOrderRowSummary", () => {
  const baseOrder = {
    items: [
      { price: 10, quantity: 2 },
      { price: 5, quantity: 1 },
    ],
    shippingType: "standard",
    customerType: "regular",
  };

  it("formats a standard order row", () => {
    expect(formatOrderRowSummary(baseOrder)).toBe("2 items · $30.00");
  });

  it.each([
    ["express", "2 items · $40.00"],
    ["overnight", "2 items · $50.00"],
  ] as const)("adds %s shipping", (shippingType, expected) => {
    expect(formatOrderRowSummary({ ...baseOrder, shippingType })).toBe(expected);
  });

  it("applies VIP discount to displayed total", () => {
    expect(
      formatOrderRowSummary({ ...baseOrder, customerType: "VIP" }),
    ).toBe("VIP · 2 items · $27.00");
  });

  it("uses express shipping before VIP discount", () => {
    expect(
      formatOrderRowSummary({
        ...baseOrder,
        shippingType: "express",
        customerType: "VIP",
      }),
    ).toBe("VIP · 2 items · $36.00");
  });

  it("treats unknown shipping type as free shipping", () => {
    expect(
      formatOrderRowSummary({ ...baseOrder, shippingType: "pickup" }),
    ).toBe("2 items · $25.00");
  });
});
