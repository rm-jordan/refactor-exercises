import { describe, expect, it } from "vitest";
import { getLicenseBadge } from "./license.js";

describe("getLicenseBadge", () => {
  it.each([
    ["trial", "Trial"],
    ["team", "Team"],
    ["business", "Business"],
  ] as const)("maps %s", (tier, label) => {
    expect(getLicenseBadge(tier)).toBe(label);
  });

  it("returns Unknown for other tiers", () => {
    expect(getLicenseBadge("enterprise")).toBe("Unknown");
  });
});
