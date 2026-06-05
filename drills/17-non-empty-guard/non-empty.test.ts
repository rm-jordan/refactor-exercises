import { describe, expect, it } from "vitest";
import { hasContent } from "./non-empty.js";

describe("hasContent", () => {
  it("returns true for non-empty text", () => {
    expect(hasContent("hello")).toBe(true);
    expect(hasContent("  x  ")).toBe(true);
  });

  it("returns false for blank, null, or undefined", () => {
    expect(hasContent("")).toBe(false);
    expect(hasContent("   ")).toBe(false);
    expect(hasContent(null)).toBe(false);
    expect(hasContent(undefined)).toBe(false);
  });
});
