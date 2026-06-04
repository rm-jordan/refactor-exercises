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

export function isValidPhone(phone: string) {
  if (!phone) {
    return false;
  }
  if (phone.length < 10) {
    return false;
  }
  if (!/^\d+$/.test(phone)) {
    return false;
  }
  return true;
}

export function registerContact(email: string, phone: string) {
  if (!email) {
    return { ok: false, error: "Email required" };
  }
  if (email.indexOf("@") === -1) {
    return { ok: false, error: "Invalid email" };
  }
  if (email.length < 5) {
    return { ok: false, error: "Invalid email" };
  }

  if (!phone) {
    return { ok: false, error: "Phone required" };
  }
  if (phone.length < 10) {
    return { ok: false, error: "Invalid phone" };
  }
  if (!/^\d+$/.test(phone)) {
    return { ok: false, error: "Invalid phone" };
  }

  return { ok: true, contact: { email, phone } };
}
