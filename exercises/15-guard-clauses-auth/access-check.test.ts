import { describe, expect, it } from "vitest";
import { canAccessAdminPanel } from "./access-check.js";

describe("canAccessAdminPanel", () => {
  it("returns true for logged-in admin or owner", () => {
    expect(canAccessAdminPanel({ isLoggedIn: true, role: "admin" })).toBe(true);
    expect(canAccessAdminPanel({ isLoggedIn: true, role: "owner" })).toBe(true);
  });

  it("returns false when user is missing", () => {
    expect(canAccessAdminPanel(null)).toBe(false);
    expect(canAccessAdminPanel(undefined)).toBe(false);
  });

  it("returns false when not logged in", () => {
    expect(canAccessAdminPanel({ isLoggedIn: false, role: "admin" })).toBe(false);
  });

  it("returns false for member or guest roles", () => {
    expect(canAccessAdminPanel({ isLoggedIn: true, role: "member" })).toBe(false);
    expect(canAccessAdminPanel({ isLoggedIn: true, role: "guest" })).toBe(false);
  });
});
