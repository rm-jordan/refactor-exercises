import { describe, expect, it } from "vitest";
import { submitSignup } from "./signup-form.js";

describe("submitSignup", () => {
  it("returns user on valid input", () => {
    expect(submitSignup("a@b.co", "password1")).toEqual({
      ok: true,
      user: { email: "a@b.co" },
    });
  });

  it("requires email", () => {
    expect(submitSignup("", "password1")).toEqual({
      ok: false,
      error: "Email required",
    });
  });

  it("rejects invalid email", () => {
    expect(submitSignup("bad", "password1")).toEqual({
      ok: false,
      error: "Invalid email",
    });
  });

  it("requires password", () => {
    expect(submitSignup("a@b.co", "")).toEqual({
      ok: false,
      error: "Password required",
    });
  });

  it("rejects short password", () => {
    expect(submitSignup("a@b.co", "short")).toEqual({
      ok: false,
      error: "Password must be at least 8 characters",
    });
  });

  it("isValidEmail rejects missing @", async () => {
    const { isValidEmail } = await import("./signup-form.js");
    expect(isValidEmail("nope")).toBe(false);
    expect(isValidEmail("a@b.co")).toBe(true);
  });

  it("isValidPassword enforces minimum length", async () => {
    const { isValidPassword } = await import("./signup-form.js");
    expect(isValidPassword("1234567")).toBe(false);
    expect(isValidPassword("12345678")).toBe(true);
  });
});
