import { describe, expect, it } from "vitest";
import { canModerate } from "./moderate.js";

describe("canModerate", () => {
  it("returns true for moderator or admin", () => {
    expect(canModerate({ isLoggedIn: true, role: "moderator" })).toBe(true);
    expect(canModerate({ isLoggedIn: true, role: "admin" })).toBe(true);
  });

  it("returns false for member", () => {
    expect(canModerate({ isLoggedIn: true, role: "member" })).toBe(false);
  });

  it("returns false when logged out or missing", () => {
    expect(canModerate({ isLoggedIn: false, role: "admin" })).toBe(false);
    expect(canModerate(null)).toBe(false);
  });
});
