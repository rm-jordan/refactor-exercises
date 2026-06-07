import { describe, expect, it } from "vitest";
import { getQuote } from "./quote.js";

describe("getQuote", () => {
  it("basic plan for 2 months", () => {
    expect(getQuote({ yearsActive: 0, region: "US" }, "basic", 2)).toBe(20);
  });

  it("express plan for 1 month", () => {
    expect(getQuote({ yearsActive: 0, region: "US" }, "express", 1)).toBe(25);
  });

  it("enterprise plan for 3 months", () => {
    expect(getQuote({ yearsActive: 0, region: "US" }, "enterprise", 3)).toBe(
      150,
    );
  });

  it("loyalty discount after 3 years", () => {
    expect(getQuote({ yearsActive: 3, region: "US" }, "basic", 1)).toBe(9);
  });

  it("EU region markup", () => {
    expect(getQuote({ yearsActive: 0, region: "EU" }, "basic", 1)).toBe(12);
  });

  it("loyalty and EU stack", () => {
    expect(getQuote({ yearsActive: 5, region: "EU" }, "express", 2)).toBe(54);
  });

  it("unknown plan returns 0", () => {
    expect(getQuote({ yearsActive: 0, region: "US" }, "trial", 5)).toBe(0);
  });

  it("zero months returns 0", () => {
    expect(getQuote({ yearsActive: 0, region: "US" }, "basic", 0)).toBe(0);
  });
});
