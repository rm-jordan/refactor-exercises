export function isValidEmail(email: string) {
  if (!email) {
    return false;
  }
  if (!email.includes("@")) {
    return false;
  }
  return true;
}

export function joinWaitlist(email: string) {
  if (!email) {
    return { ok: false, error: "Email required" };
  }
  if (!email.includes("@")) {
    return { ok: false, error: "Invalid email" };
  }

  return { ok: true, email };
}
