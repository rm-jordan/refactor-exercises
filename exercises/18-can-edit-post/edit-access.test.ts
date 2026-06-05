import { describe, expect, it } from "vitest";
import { canEditPost } from "./edit-access.js";

describe("canEditPost", () => {
  const author = { id: "u1", isLoggedIn: true, role: "member" };
  const moderator = { id: "u2", isLoggedIn: true, role: "moderator" };
  const post = { authorId: "u1" };

  it("returns true when logged-in user owns the post", () => {
    expect(canEditPost(author, post)).toBe(true);
  });

  it("returns true when logged-in user is a moderator", () => {
    expect(canEditPost(moderator, { authorId: "someone-else" })).toBe(true);
  });

  it("returns false when logged-in user is not author or moderator", () => {
    expect(canEditPost({ id: "u9", isLoggedIn: true, role: "member" }, post)).toBe(
      false,
    );
  });

  it("returns false when user is missing or not logged in", () => {
    expect(canEditPost(null, post)).toBe(false);
    expect(canEditPost({ id: "u1", isLoggedIn: false, role: "member" }, post)).toBe(
      false,
    );
  });

  it("returns false when post is missing", () => {
    expect(canEditPost(author, null)).toBe(false);
  });
});
