import { describe, expect, it } from "vitest";
import { submitLogin } from "./login-form.js";

describe("submitLogin", () => {
  it("returns session on valid input", () => {
    expect(submitLogin("a@b.co", "password1")).toEqual({
      ok: true,
      session: { email: "a@b.co" },
    });
  });

  it("requires email", () => {
    expect(submitLogin("", "password1")).toEqual({
      ok: false,
      error: "Email required",
    });
  });

  it("rejects invalid email", () => {
    expect(submitLogin("bad", "password1")).toEqual({
      ok: false,
      error: "Invalid email",
    });
  });

  it("requires password", () => {
    expect(submitLogin("a@b.co", "")).toEqual({
      ok: false,
      error: "Password required",
    });
  });

  it("rejects short password", () => {
    expect(submitLogin("a@b.co", "short")).toEqual({
      ok: false,
      error: "Password must be at least 8 characters",
    });
  });
});
