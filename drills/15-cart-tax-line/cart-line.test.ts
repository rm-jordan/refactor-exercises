import { describe, expect, it } from "vitest";
import { formatCartLine } from "./cart-line.js";

describe("formatCartLine", () => {
  const cart = {
    items: [
      { price: 10, quantity: 2 },
      { price: 5, quantity: 1 },
    ],
    state: "NY",
    membershipType: "guest",
  };

  it("formats guest cart", () => {
    expect(formatCartLine(cart)).toBe("2 items · $25.00");
  });

  it("adds CA tax", () => {
    expect(formatCartLine({ ...cart, state: "CA" })).toBe("2 items · $27.06");
  });

  it("applies member discount", () => {
    expect(formatCartLine({ ...cart, membershipType: "member" })).toBe(
      "Member · 2 items · $23.75",
    );
  });

  it("applies tax before member discount", () => {
    expect(
      formatCartLine({ ...cart, state: "CA", membershipType: "member" }),
    ).toBe("Member · 2 items · $25.71");
  });
});
