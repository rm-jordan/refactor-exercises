# 11 — Flag arguments

Refactor `bookAppointment` in `appointment-fee.ts`.

**Focus:** Replace boolean “flag” parameters with a named options object (built inside the function if exports must keep four booleans).

**Constraints:** Keep `bookAppointment(date, isUrgent, sendEmail, isVirtual)` signature. Tests must pass.
