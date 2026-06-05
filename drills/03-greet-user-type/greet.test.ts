import { describe, expect, it } from "vitest";
import { greet } from "./greet.js";

describe("greet", () => {
  it("greets by name", () => {
    expect(greet({ name: "Sam" })).toBe("Hello, Sam");
  });
});
