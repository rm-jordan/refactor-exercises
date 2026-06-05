import { describe, expect, it } from "vitest";
import { joinWaitlist } from "./waitlist.js";

describe("joinWaitlist", () => {
  it("accepts valid email", () => {
    expect(joinWaitlist("you@example.com")).toEqual({ ok: true, email: "you@example.com" });
  });

  it("rejects invalid email", () => {
    expect(joinWaitlist("nope")).toEqual({ ok: false, error: "Invalid email" });
  });
});
