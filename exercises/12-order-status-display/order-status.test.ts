import { describe, expect, it } from "vitest";
import { getOrderStatusDisplay } from "./order-status.js";

describe("getOrderStatusDisplay", () => {
  it.each([
    ["pending", { label: "Pending", tone: "neutral", showTracking: false }],
    ["processing", { label: "Processing", tone: "info", showTracking: false }],
    ["shipped", { label: "Shipped", tone: "info", showTracking: true }],
    ["delivered", { label: "Delivered", tone: "success", showTracking: true }],
    ["cancelled", { label: "Cancelled", tone: "danger", showTracking: false }],
  ] as const)("maps %s to display config", (status, expected) => {
    expect(getOrderStatusDisplay(status, false)).toEqual(expected);
  });

  it("returns unknown display for unrecognized status", () => {
    expect(getOrderStatusDisplay("refunded", false)).toEqual({
      label: "Unknown",
      tone: "neutral",
      showTracking: false,
    });
  });

  it("adds priority suffix for premium pending and processing orders", () => {
    expect(getOrderStatusDisplay("pending", true)).toEqual({
      label: "Pending (Priority)",
      tone: "neutral",
      showTracking: false,
    });
    expect(getOrderStatusDisplay("processing", true)).toEqual({
      label: "Processing (Priority)",
      tone: "info",
      showTracking: false,
    });
  });

  it("does not add priority suffix for other statuses", () => {
    expect(getOrderStatusDisplay("shipped", true)).toEqual({
      label: "Shipped",
      tone: "info",
      showTracking: true,
    });
  });
});
