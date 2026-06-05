import { describe, expect, it } from "vitest";
import { getBusFare } from "./bus-fare.js";

describe("getBusFare", () => {
  it("is free under 12", () => {
    expect(getBusFare(11)).toBe(0);
  });

  it("is reduced at 65+", () => {
    expect(getBusFare(65)).toBe(1);
  });

  it("is standard fare otherwise", () => {
    expect(getBusFare(12)).toBe(2);
    expect(getBusFare(30)).toBe(2);
  });
});
