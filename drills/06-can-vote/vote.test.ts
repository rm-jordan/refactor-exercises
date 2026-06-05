import { describe, expect, it } from "vitest";
import { canVote } from "./vote.js";

describe("canVote", () => {
  it("returns true for logged-in adult", () => {
    expect(canVote({ isLoggedIn: true, age: 18 })).toBe(true);
  });

  it("returns false when logged out", () => {
    expect(canVote({ isLoggedIn: false, age: 30 })).toBe(false);
  });

  it("returns false for minor", () => {
    expect(canVote({ isLoggedIn: true, age: 17 })).toBe(false);
  });

  it("returns false when user missing", () => {
    expect(canVote(null)).toBe(false);
  });
});
