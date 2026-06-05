import { describe, expect, it } from "vitest";
import { getProductTitle } from "./product.js";

describe("getProductTitle", () => {
  it("uppercases product name", () => {
    expect(getProductTitle({ name: "widget" })).toBe("WIDGET");
  });
});
