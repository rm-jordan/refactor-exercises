import { analytics } from "./analytics.js";
import { database } from "./database.js";
import { emailService } from "./email-service.js";

// Step 1: Replace `any` — type what registerUser actually uses.
export type User = {
  email?: string;
  name?: string;
};

// Step 2: Validation only — fail fast before any side effects.
function assertUserHasEmail(user: User): asserts user is User & { email: string } {
  if (!user.email) {
    throw new Error("Missing email");
  }
}

// Step 3: Persistence only — talk to the database.
function persistUser(user: User & { email: string }) {
  return database.save(user);
}

// Step 4: Notification only — welcome email.
function sendWelcomeEmail(email: string) {
  emailService.sendWelcomeEmail(email);
}

// Step 5: Analytics only — track the event.
function trackUserRegistered(email: string) {
  analytics.track("user_registered", { email });
}

// Step 6: Orchestrate — same order: validate → save → email → track → return.
export function registerUser(user: User) {
  assertUserHasEmail(user);

  const savedUser = persistUser(user);

  sendWelcomeEmail(user.email);

  trackUserRegistered(user.email);

  return savedUser;
}
