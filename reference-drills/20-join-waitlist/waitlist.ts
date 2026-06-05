export function isValidEmail(email: string) {
  return email.includes("@");
}

export function joinWaitlist(email: string) {
  if (!email.includes("@")) {
    return { ok: false, error: "Invalid email" };
  }

  return { ok: true, email };
}
