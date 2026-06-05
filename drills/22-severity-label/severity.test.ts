import { describe, expect, it } from "vitest";
import { getSeverityLabel } from "./severity.js";

describe("getSeverityLabel", () => {
  it.each([
    ["info", "Info"],
    ["warning", "Warning"],
    ["critical", "Critical"],
  ] as const)("maps %s", (level, label) => {
    expect(getSeverityLabel(level)).toBe(label);
  });

  it("returns Unknown for other levels", () => {
    expect(getSeverityLabel("debug")).toBe("Unknown");
  });
});
