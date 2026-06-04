import { describe, expect, it } from "vitest";
import { createShippingLabel, validateAddress } from "./address.js";

describe("createShippingLabel", () => {
  it("formats address parts as a comma-separated label", () => {
    expect(
      createShippingLabel("123 Main St", "Toronto", "ON", "M5V 1A1"),
    ).toBe("123 Main St, Toronto, ON, M5V 1A1");
  });
});

describe("validateAddress", () => {
  it("returns true when all fields are non-empty", () => {
    expect(validateAddress("123 Main St", "Toronto", "ON", "M5V 1A1")).toBe(
      true,
    );
  });

  it.each([
    ["street", "", "Toronto", "ON", "M5V"],
    ["city", "123 Main", "", "ON", "M5V"],
    ["province", "123 Main", "Toronto", "", "M5V"],
    ["postalCode", "123 Main", "Toronto", "ON", ""],
  ] as const)("returns false when %s is empty", (_field, street, city, province, postal) => {
    expect(validateAddress(street, city, province, postal)).toBe(false);
  });
});
