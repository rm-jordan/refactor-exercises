import { describe, expect, it } from "vitest";
import { getMovieTicketPrice } from "./ticket-price.js";

describe("getMovieTicketPrice", () => {
  it("charges child price under 13", () => {
    expect(getMovieTicketPrice(8)).toBe(8);
    expect(getMovieTicketPrice(12)).toBe(8);
  });

  it("charges adult price from 13 to 64", () => {
    expect(getMovieTicketPrice(13)).toBe(14);
    expect(getMovieTicketPrice(40)).toBe(14);
    expect(getMovieTicketPrice(64)).toBe(14);
  });

  it("charges senior price at 65 and above", () => {
    expect(getMovieTicketPrice(65)).toBe(10);
    expect(getMovieTicketPrice(80)).toBe(10);
  });
});
