import { describe, expect, it } from "vitest";
import { formatInvoiceLine } from "./invoice-line.js";

describe("formatInvoiceLine", () => {
  it("formats count and total", () => {
    expect(
      formatInvoiceLine([
        { price: 20, quantity: 1 },
        { price: 3, quantity: 4 },
      ]),
    ).toBe("2 items · $32.00");
  });

  it("handles empty list", () => {
    expect(formatInvoiceLine([])).toBe("0 items · $0.00");
  });
});
