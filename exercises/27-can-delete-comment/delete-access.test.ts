import { describe, expect, it } from "vitest";
import { canDeleteComment } from "./delete-access.js";

describe("canDeleteComment", () => {
  const author = { id: "u1", isLoggedIn: true, role: "member" };
  const admin = { id: "u2", isLoggedIn: true, role: "admin" };
  const comment = { authorId: "u1" };

  it("returns true for comment author", () => {
    expect(canDeleteComment(author, comment)).toBe(true);
  });

  it("returns true for admin", () => {
    expect(canDeleteComment(admin, { authorId: "other" })).toBe(true);
  });

  it("returns false for non-author non-admin", () => {
    expect(
      canDeleteComment({ id: "u9", isLoggedIn: true, role: "member" }, comment),
    ).toBe(false);
  });

  it("returns false when user missing or logged out", () => {
    expect(canDeleteComment(null, comment)).toBe(false);
    expect(canDeleteComment({ id: "u1", isLoggedIn: false, role: "member" }, comment)).toBe(
      false,
    );
  });

  it("returns false when comment missing", () => {
    expect(canDeleteComment(author, null)).toBe(false);
  });
});
