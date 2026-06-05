import { describe, expect, it } from "vitest";
import { getTierBadge } from "./tier-badge.js";

describe("getTierBadge", () => {
  it.each([
    ["bronze", "Bronze"],
    ["silver", "Silver"],
    ["gold", "Gold"],
  ] as const)("maps %s", (tier, label) => {
    expect(getTierBadge(tier)).toBe(label);
  });

  it("returns Unknown for other tiers", () => {
    expect(getTierBadge("platinum")).toBe("Unknown");
  });
});
