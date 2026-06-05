import { describe, expect, it } from "vitest";
import { joinWaitlist } from "./waitlist.js";

describe("joinWaitlist", () => {
  it("accepts a valid email", () => {
    expect(joinWaitlist("you@example.com")).toEqual({
      ok: true,
      email: "you@example.com",
    });
  });

  it("requires email", () => {
    expect(joinWaitlist("")).toEqual({ ok: false, error: "Email required" });
  });

  it("rejects email without @", () => {
    expect(joinWaitlist("bad")).toEqual({ ok: false, error: "Invalid email" });
  });
});
