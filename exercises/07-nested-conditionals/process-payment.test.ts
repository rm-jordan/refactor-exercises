import { describe, expect, it } from "vitest";
import { processPayment } from "./process-payment.js";

describe("processPayment", () => {
  it("returns true for active payment with positive amount", () => {
    expect(processPayment({ active: true, amount: 1 })).toBe(true);
    expect(processPayment({ active: true, amount: 99.5 })).toBe(true);
  });

  it("returns false when payment is missing or null", () => {
    expect(processPayment(null)).toBe(false);
    expect(processPayment(undefined)).toBe(false);
  });

  it("returns false when payment is not active", () => {
    expect(processPayment({ active: false, amount: 10 })).toBe(false);
    expect(processPayment({ amount: 10 })).toBe(false);
  });

  it("returns false when amount is zero or negative", () => {
    expect(processPayment({ active: true, amount: 0 })).toBe(false);
    expect(processPayment({ active: true, amount: -1 })).toBe(false);
  });
});
