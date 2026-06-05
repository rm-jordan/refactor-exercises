import { describe, expect, it } from "vitest";
import { formatLineTotal } from "./line-total.js";

describe("formatLineTotal", () => {
  it("sums price * qty", () => {
    expect(
      formatLineTotal([
        { price: 10, qty: 2 },
        { price: 5, qty: 1 },
      ]),
    ).toBe("$25.00");
  });

  it("formats empty list", () => {
    expect(formatLineTotal([])).toBe("$0.00");
  });
});
