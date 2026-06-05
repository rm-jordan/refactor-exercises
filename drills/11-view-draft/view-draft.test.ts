import { describe, expect, it } from "vitest";
import { canViewDraft } from "./view-draft.js";

describe("canViewDraft", () => {
  const user = { id: "u1", isLoggedIn: true };
  const doc = { authorId: "u1" };

  it("returns true for author", () => {
    expect(canViewDraft(user, doc)).toBe(true);
  });

  it("returns false for non-author", () => {
    expect(canViewDraft(user, { authorId: "u2" })).toBe(false);
  });

  it("returns false when user or doc missing", () => {
    expect(canViewDraft(null, doc)).toBe(false);
    expect(canViewDraft(user, null)).toBe(false);
  });

  it("returns false when logged out", () => {
    expect(canViewDraft({ id: "u1", isLoggedIn: false }, doc)).toBe(false);
  });
});
