import { describe, expect, it } from "vitest";
import { getPlanLabel } from "./plan-label.js";

describe("getPlanLabel", () => {
  it.each([
    ["free", "Free"],
    ["starter", "Starter"],
    ["pro", "Pro"],
    ["enterprise", "Enterprise"],
  ] as const)("returns %s label", (plan, label) => {
    expect(getPlanLabel(plan)).toBe(label);
  });

  it("returns Unknown for unrecognized plans", () => {
    expect(getPlanLabel("custom")).toBe("Unknown");
    expect(getPlanLabel("")).toBe("Unknown");
  });
});
