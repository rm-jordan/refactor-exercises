import { describe, expect, it } from "vitest";
import {
  isValidEmail,
  isValidPhone,
  registerContact,
} from "./contact-registration.js";

describe("isValidEmail", () => {
  it("accepts valid email", () => {
    expect(isValidEmail("a@b.co")).toBe(true);
  });

  it("rejects invalid email", () => {
    expect(isValidEmail("")).toBe(false);
    expect(isValidEmail("ab")).toBe(false);
    expect(isValidEmail("no-at.com")).toBe(false);
  });
});

describe("isValidPhone", () => {
  it("accepts valid phone", () => {
    expect(isValidPhone("5551234567")).toBe(true);
  });

  it("rejects invalid phone", () => {
    expect(isValidPhone("")).toBe(false);
    expect(isValidPhone("123")).toBe(false);
    expect(isValidPhone("55-12")).toBe(false);
  });
});

describe("registerContact", () => {
  it("registers valid contact", () => {
    expect(registerContact("ada@lab.com", "5551234567")).toEqual({
      ok: true,
      contact: { email: "ada@lab.com", phone: "5551234567" },
    });
  });

  it("returns error for invalid email", () => {
    expect(registerContact("bad", "5551234567")).toEqual({
      ok: false,
      error: "Invalid email",
    });
  });

  it("returns error for invalid phone", () => {
    expect(registerContact("ada@lab.com", "12")).toEqual({
      ok: false,
      error: "Invalid phone",
    });
  });
});
