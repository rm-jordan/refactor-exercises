import { describe, expect, it } from "vitest";
import { formatCheckoutLine } from "./checkout-line.js";

describe("formatCheckoutLine", () => {
  const checkout = {
    items: [
      { price: 10, quantity: 2 },
      { price: 5, quantity: 1 },
    ],
    region: "CA",
    loyaltyTier: "standard",
  };

  it("formats standard checkout", () => {
    expect(formatCheckoutLine(checkout)).toBe("2 items · $25.00");
  });

  it("adds NY tax", () => {
    expect(formatCheckoutLine({ ...checkout, region: "NY" })).toBe("2 items · $27.22");
  });

  it("applies gold loyalty discount", () => {
    expect(formatCheckoutLine({ ...checkout, loyaltyTier: "gold" })).toBe("Gold · 2 items · $22.50");
  });

  it("applies NY tax before gold discount", () => {
    expect(
      formatCheckoutLine({ ...checkout, region: "NY", loyaltyTier: "gold" }),
    ).toBe("Gold · 2 items · $24.50");
  });
});
