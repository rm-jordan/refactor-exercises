import { describe, expect, it } from "vitest";
import { isAdult } from "./adult.js";

describe("isAdult", () => {
  it("returns true at 18 and above", () => {
    expect(isAdult(18)).toBe(true);
    expect(isAdult(30)).toBe(true);
  });

  it("returns false below 18", () => {
    expect(isAdult(17)).toBe(false);
    expect(isAdult(0)).toBe(false);
  });
});
