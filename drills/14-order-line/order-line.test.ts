import { describe, expect, it } from "vitest";
import { formatOrderLine } from "./order-line.js";

describe("formatOrderLine", () => {
  const order = {
    items: [
      { price: 10, quantity: 2 },
      { price: 5, quantity: 1 },
    ],
    shippingType: "standard",
  };

  it("adds standard shipping", () => {
    expect(formatOrderLine(order)).toBe("2 items · $30.00");
  });

  it("adds no shipping for other types", () => {
    expect(formatOrderLine({ ...order, shippingType: "pickup" })).toBe(
      "2 items · $25.00",
    );
  });
});
