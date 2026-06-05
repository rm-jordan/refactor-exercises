import { describe, expect, it } from "vitest";
import { getPriorityLabel } from "./priority.js";

describe("getPriorityLabel", () => {
  it.each([
    ["low", "Low"],
    ["medium", "Medium"],
    ["high", "High"],
  ] as const)("maps %s", (priority, label) => {
    expect(getPriorityLabel(priority)).toBe(label);
  });

  it("returns Unknown for other values", () => {
    expect(getPriorityLabel("urgent")).toBe("Unknown");
  });
});
