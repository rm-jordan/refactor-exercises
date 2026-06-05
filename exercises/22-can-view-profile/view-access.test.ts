import { describe, expect, it } from "vitest";
import { canViewProfile } from "./view-access.js";

describe("canViewProfile", () => {
  const viewer = { id: "u1", isLoggedIn: true };
  const privateProfile = { ownerId: "u1", isPublic: false };
  const publicProfile = { ownerId: "u2", isPublic: true };

  it("returns true for public profiles", () => {
    expect(canViewProfile(viewer, publicProfile)).toBe(true);
  });

  it("returns true when viewer owns a private profile", () => {
    expect(canViewProfile(viewer, privateProfile)).toBe(true);
  });

  it("returns false for someone else's private profile", () => {
    expect(canViewProfile(viewer, { ownerId: "u9", isPublic: false })).toBe(false);
  });

  it("returns false when viewer is missing or not logged in", () => {
    expect(canViewProfile(null, publicProfile)).toBe(false);
    expect(canViewProfile({ id: "u1", isLoggedIn: false }, publicProfile)).toBe(
      false,
    );
  });

  it("returns false when profile is missing", () => {
    expect(canViewProfile(viewer, null)).toBe(false);
  });
});
