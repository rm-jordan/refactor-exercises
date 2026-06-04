# 14 — Duplicate validation

Refactor `contact-registration.ts`.

**Focus:** `registerContact` repeats email/phone rules already in `isValidEmail` / `isValidPhone`. Reuse validators; keep error messages identical.

**Constraints:** Keep all three exports. Tests must pass.
