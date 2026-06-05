import { describe, expect, it } from "vitest";
import { getStatusColor } from "./status-color.js";

describe("getStatusColor", () => {
  it.each([
    ["active", "green"],
    ["paused", "yellow"],
  ] as const)("maps %s", (status, color) => {
    expect(getStatusColor(status)).toBe(color);
  });

  it("defaults to gray", () => {
    expect(getStatusColor("archived")).toBe("gray");
  });
});
