import { describe, expect, it } from "vitest";
import { isPositive } from "./positive.js";

describe("isPositive", () => {
  it("returns true for positive numbers", () => {
    expect(isPositive(1)).toBe(true);
    expect(isPositive(0.5)).toBe(true);
  });

  it("returns false for zero, negative, or missing", () => {
    expect(isPositive(0)).toBe(false);
    expect(isPositive(-1)).toBe(false);
    expect(isPositive(null)).toBe(false);
    expect(isPositive(undefined)).toBe(false);
  });
});
