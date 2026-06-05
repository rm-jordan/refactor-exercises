import { describe, expect, it } from "vitest";
import { formatQuoteLine } from "./quote-line.js";

describe("formatQuoteLine", () => {
  const quote = {
    items: [
      { price: 10, quantity: 2 },
      { price: 5, quantity: 1 },
    ],
    deliveryType: "standard",
  };

  it("formats quote without express fee", () => {
    expect(formatQuoteLine(quote)).toBe("2 items · $25.00");
  });

  it("adds express delivery fee", () => {
    expect(formatQuoteLine({ ...quote, deliveryType: "express" })).toBe("2 items · $35.00");
  });
});
