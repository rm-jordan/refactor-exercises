import { describe, expect, it } from "vitest";
import { canPinPost } from "./pin-post.js";

describe("canPinPost", () => {
  const user = { id: "u1", isLoggedIn: true, role: "member" };
  const post = { authorId: "u1" };

  it("returns true for author", () => {
    expect(canPinPost(user, post)).toBe(true);
  });

  it("returns true for admin on any post", () => {
    expect(canPinPost({ id: "u2", isLoggedIn: true, role: "admin" }, { authorId: "u9" })).toBe(true);
  });

  it("returns false for non-author member", () => {
    expect(canPinPost({ id: "u9", isLoggedIn: true, role: "member" }, post)).toBe(false);
  });

  it("returns false when user or post missing", () => {
    expect(canPinPost(null, post)).toBe(false);
    expect(canPinPost(user, null)).toBe(false);
  });
});
