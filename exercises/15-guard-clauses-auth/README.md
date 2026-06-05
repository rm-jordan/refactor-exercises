# 15 — Guard clauses (auth)

Refactor `canAccessAdminPanel` in `access-check.ts`.

**Focus:** Flatten nested `if`s with guard clauses; type the `user` argument.

**Constraints:** Keep export and boolean result. Tests must pass.

**Interview note:** Very common — “should we show the admin nav link?”
