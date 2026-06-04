# React 01 — Messy UserCard

Refactor `UserCard.tsx` for a frontend code review / refactoring round.

**Smells:** `any` props, nested ternaries in JSX, related flags (`showEmail`, `showBadge`) separate from user data.

**Focus:**

- Type `UserCardProps` (user shape + flags)
- Flatten JSX (early return, child component, or variables before `return`)
- Keep behavior identical

**Constraints:** Keep exporting `UserCard`. All tests must pass.

```bash
npx vitest run exercises-react/01-messy-user-card
npm run reset:react -- 01-messy-user-card
```
