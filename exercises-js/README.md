# JavaScript exercises

JavaScript mirrors for interviews that use `.js` instead of `.ts`.

| Folder | Pattern |
|--------|---------|
| `04-conditional-explosion` | Lookup table |
| `05-magic-numbers` | Named constants |
| `07-nested-conditionals` | Guard clauses |
| `11-flag-arguments` | Options object (from booleans) |
| `12-legacy-async` | async/await |
| `13-avoid-mutation` | No input mutation |

```bash
npm test                    # runs TS + JS tests
npx vitest run exercises-js/05-magic-numbers
npm run reset:js -- 05-magic-numbers
```

Refactoring moves are identical to the TypeScript versions; skip `interface` / `type` unless you add JSDoc.
