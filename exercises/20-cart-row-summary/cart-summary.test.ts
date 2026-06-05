import { describe, expect, it } from "vitest";
import { formatCartRowSummary } from "./cart-summary.js";

describe("formatCartRowSummary", () => {
  const baseCart = {
    items: [
      { price: 10, quantity: 2 },
      { price: 5, quantity: 1 },
    ],
    state: "NY",
    membershipType: "guest",
  };

  it("formats a guest cart row", () => {
    expect(formatCartRowSummary(baseCart)).toBe("2 items · $25.00");
  });

  it("adds CA tax to the total", () => {
    expect(formatCartRowSummary({ ...baseCart, state: "CA" })).toBe(
      "2 items · $27.06",
    );
  });

  it("applies member discount to displayed total", () => {
    expect(formatCartRowSummary({ ...baseCart, membershipType: "member" })).toBe(
      "Member · 2 items · $23.75",
    );
  });

  it("applies CA tax before member discount", () => {
    expect(
      formatCartRowSummary({
        ...baseCart,
        state: "CA",
        membershipType: "member",
      }),
    ).toBe("Member · 2 items · $25.71");
  });

  it("ignores tax for non-CA states", () => {
    expect(formatCartRowSummary({ ...baseCart, state: "TX" })).toBe(
      "2 items · $25.00",
    );
  });
});
