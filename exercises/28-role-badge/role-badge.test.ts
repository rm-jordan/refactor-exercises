import { describe, expect, it } from "vitest";
import { getRoleBadgeLabel } from "./role-badge.js";

describe("getRoleBadgeLabel", () => {
  it.each([
    ["admin", "Admin"],
    ["moderator", "Moderator"],
    ["member", "Member"],
    ["guest", "Guest"],
  ] as const)("returns badge for %s", (role, label) => {
    expect(getRoleBadgeLabel(role)).toBe(label);
  });

  it("returns Unknown for unrecognized roles", () => {
    expect(getRoleBadgeLabel("bot")).toBe("Unknown");
  });
});
