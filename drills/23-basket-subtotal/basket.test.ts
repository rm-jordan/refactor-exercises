import { describe, expect, it } from "vitest";
import { formatBasketSubtotal } from "./basket.js";

describe("formatBasketSubtotal", () => {
  it("sums items", () => {
    expect(
      formatBasketSubtotal([
        { price: 4, qty: 3 },
        { price: 10, qty: 1 },
      ]),
    ).toBe("$22.00");
  });

  it("handles empty basket", () => {
    expect(formatBasketSubtotal([])).toBe("$0.00");
  });
});
