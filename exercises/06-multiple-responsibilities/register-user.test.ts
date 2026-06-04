import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { analytics } from "./analytics.js";
import { database } from "./database.js";
import { emailService } from "./email-service.js";
import { registerUser } from "./register-user.js";

describe("registerUser", () => {
  beforeEach(() => {
    vi.spyOn(database, "save");
    vi.spyOn(emailService, "sendWelcomeEmail");
    vi.spyOn(analytics, "track");
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("throws when email is missing", () => {
    expect(() => registerUser({ name: "Ada" })).toThrow("Missing email");
    expect(database.save).not.toHaveBeenCalled();
  });

  it("saves user and returns saved record", () => {
    const user = { email: "ada@example.com", name: "Ada" };
    const result = registerUser(user);

    expect(database.save).toHaveBeenCalledWith(user);
    expect(result).toEqual({ email: "ada@example.com", name: "Ada", id: "saved-id" });
  });

  it("sends welcome email to the user", () => {
    registerUser({ email: "ada@example.com" });
    expect(emailService.sendWelcomeEmail).toHaveBeenCalledWith("ada@example.com");
  });

  it("tracks user_registered with email", () => {
    registerUser({ email: "track@example.com" });
    expect(analytics.track).toHaveBeenCalledWith("user_registered", {
      email: "track@example.com",
    });
  });
});
