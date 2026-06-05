import { describe, expect, it } from "vitest";
import { formatReceiptTotal } from "./receipt-total.js";

describe("formatReceiptTotal", () => {
  it("formats item count and total", () => {
    expect(
      formatReceiptTotal([
        { price: 10, quantity: 2 },
        { price: 5, quantity: 1 },
      ]),
    ).toBe("2 items · $25.00");
  });

  it("handles a single item", () => {
    expect(formatReceiptTotal([{ price: 3.5, quantity: 2 }])).toBe(
      "1 items · $7.00",
    );
  });

  it("handles empty cart", () => {
    expect(formatReceiptTotal([])).toBe("0 items · $0.00");
  });
});
