import { describe, expect, it } from "vitest";
import { getConnectionLabel } from "./connection.js";

describe("getConnectionLabel", () => {
  it.each([
    ["online", "Online"],
    ["offline", "Offline"],
  ] as const)("maps %s", (status, label) => {
    expect(getConnectionLabel(status)).toBe(label);
  });

  it("defaults to Unknown", () => {
    expect(getConnectionLabel("away")).toBe("Unknown");
  });
});
