# Exercise 6 — Multiple Responsibilities

Refactor `registerUser` in `register-user.ts`.

**Focus:** Separate validation, persistence, notifications, and analytics. Collaborators live in `database.ts`, `email-service.ts`, and `analytics.ts` (you may refactor how `registerUser` uses them).

**Constraints:** Keep exporting `registerUser`. Side effects must still occur in the same order. All tests must pass.
