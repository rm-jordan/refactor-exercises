import { describe, expect, it } from "vitest";
import { qualifiesForSeniorDiscount } from "./senior.js";

describe("qualifiesForSeniorDiscount", () => {
  it("returns true at 65 and above", () => {
    expect(qualifiesForSeniorDiscount(65)).toBe(true);
    expect(qualifiesForSeniorDiscount(80)).toBe(true);
  });

  it("returns false below 65", () => {
    expect(qualifiesForSeniorDiscount(64)).toBe(false);
  });
});
