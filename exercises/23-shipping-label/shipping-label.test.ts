import { describe, expect, it } from "vitest";
import { getShippingLabel } from "./shipping-label.js";

describe("getShippingLabel", () => {
  it.each([
    ["standard", "Standard (5–7 days)"],
    ["express", "Express (2–3 days)"],
    ["overnight", "Overnight"],
  ] as const)("returns label for %s", (type, label) => {
    expect(getShippingLabel(type)).toBe(label);
  });

  it("returns unknown for unrecognized types", () => {
    expect(getShippingLabel("pickup")).toBe("Unknown shipping");
  });
});
