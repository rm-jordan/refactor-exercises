import { describe, expect, it } from "vitest";
import { getFreeShippingMessage } from "./shipping-banner.js";

describe("getFreeShippingMessage", () => {
  it("shows qualified message at 50 or above", () => {
    expect(getFreeShippingMessage(50)).toBe("You qualify for free shipping!");
    expect(getFreeShippingMessage(75)).toBe("You qualify for free shipping!");
  });

  it("shows amount remaining below threshold", () => {
    expect(getFreeShippingMessage(35)).toBe("Add $15.00 more for free shipping");
    expect(getFreeShippingMessage(0)).toBe("Add $50.00 more for free shipping");
  });

  it("handles decimal totals", () => {
    expect(getFreeShippingMessage(49.5)).toBe("Add $0.50 more for free shipping");
  });
});
