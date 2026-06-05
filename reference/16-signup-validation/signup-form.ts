export function isValidEmail(email: string) {
  if (!email) {
    return false;
  }
  if (email.indexOf("@") === -1) {
    return false;
  }
  if (email.length < 5) {
    return false;
  }
  return true;
}

export function isValidPassword(password: string) {
  if (!password) {
    return false;
  }
  if (password.length < 8) {
    return false;
  }
  return true;
}

export function submitSignup(email: string, password: string) {
  if (!email) {
    return { ok: false, error: "Email required" };
  }
  if (email.indexOf("@") === -1) {
    return { ok: false, error: "Invalid email" };
  }
  if (email.length < 5) {
    return { ok: false, error: "Invalid email" };
  }

  if (!password) {
    return { ok: false, error: "Password required" };
  }
  if (password.length < 8) {
    return { ok: false, error: "Password must be at least 8 characters" };
  }

  return { ok: true, user: { email } };
}
