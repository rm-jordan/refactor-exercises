import { describe, expect, it } from "vitest";
import { getParkingFee } from "./parking.js";

describe("getParkingFee", () => {
  it("charges short stay rate", () => {
    expect(getParkingFee(1)).toBe(3);
  });

  it("charges medium stay rate", () => {
    expect(getParkingFee(3)).toBe(8);
  });

  it("charges day rate for long stays", () => {
    expect(getParkingFee(5)).toBe(15);
  });
});
