import { describe, expect, it } from "vitest";
import { calculateDiscount } from "./calculate-discount.js";

describe("calculateDiscount", () => {
  it("returns 0.15 when customer has been active for 5 years or more", () => {
    expect(calculateDiscount({ yearsAsCustomer: 5 })).toBe(0.15);
    expect(calculateDiscount({ yearsAsCustomer: 10 })).toBe(0.15);
  });

  it("returns 0 when customer has been active for less than 5 years", () => {
    expect(calculateDiscount({ yearsAsCustomer: 4 })).toBe(0);
    expect(calculateDiscount({ yearsAsCustomer: 0 })).toBe(0);
  });
});
