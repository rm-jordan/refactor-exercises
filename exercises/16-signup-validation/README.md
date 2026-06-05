# 16 — Signup validation

Refactor `submitSignup` in `signup-form.ts`.

**Focus:** Reuse `isValidEmail` and `isValidPassword` instead of duplicating their checks.

**Constraints:** Keep exports and error messages exactly. Tests must pass.

**Interview note:** Classic form handler — validators exist but `submitSignup` ignores them.
