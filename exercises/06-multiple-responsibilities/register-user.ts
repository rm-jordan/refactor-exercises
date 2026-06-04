import { analytics } from "./analytics.js";
import { database } from "./database.js";
import { emailService } from "./email-service.js";

export function registerUser(user: any) {
  if (!user.email) {
    throw new Error("Missing email");
  }

  const savedUser = database.save(user);

  emailService.sendWelcomeEmail(user.email);

  analytics.track("user_registered", {
    email: user.email,
  });

  return savedUser;
}
