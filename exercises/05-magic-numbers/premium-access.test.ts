import { describe, expect, it } from "vitest";
import {
  applySeniorDiscount,
  canAccessPremiumContent,
} from "./premium-access.js";

describe("canAccessPremiumContent", () => {
  it("returns true at age 18 and above", () => {
    expect(canAccessPremiumContent(18)).toBe(true);
    expect(canAccessPremiumContent(25)).toBe(true);
  });

  it("returns false below age 18", () => {
    expect(canAccessPremiumContent(17)).toBe(false);
    expect(canAccessPremiumContent(0)).toBe(false);
  });
});

describe("applySeniorDiscount", () => {
  it("returns true at age 65 and above", () => {
    expect(applySeniorDiscount(65)).toBe(true);
    expect(applySeniorDiscount(80)).toBe(true);
  });

  it("returns false below age 65", () => {
    expect(applySeniorDiscount(64)).toBe(false);
    expect(applySeniorDiscount(18)).toBe(false);
  });
});
