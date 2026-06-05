import { describe, expect, it } from "vitest";
import { subscribe } from "./subscribe.js";

describe("subscribe", () => {
  it("accepts valid email", () => {
    expect(subscribe("a@b.co")).toEqual({ ok: true, email: "a@b.co" });
  });

  it("rejects invalid email", () => {
    expect(subscribe("nope")).toEqual({ ok: false, error: "Invalid email" });
  });
});
