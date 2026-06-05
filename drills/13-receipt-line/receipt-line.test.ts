import { describe, expect, it } from "vitest";
import { formatReceiptLine } from "./receipt-line.js";

describe("formatReceiptLine", () => {
  it("formats count and total", () => {
    expect(
      formatReceiptLine([
        { price: 10, quantity: 2 },
        { price: 5, quantity: 1 },
      ]),
    ).toBe("2 items · $25.00");
  });

  it("handles empty list", () => {
    expect(formatReceiptLine([])).toBe("0 items · $0.00");
  });
});
