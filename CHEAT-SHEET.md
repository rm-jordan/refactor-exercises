# Refactoring cheat sheet

**If you see this → do this** (keep tests green, small steps, talk out loud).

| You see | Do this first |
|---------|----------------|
| `any` on a parameter | Type the fields the function actually reads (`email?`, `amount`, etc.) |
| Long function (math + I/O + validation) | Extract pure calculation; orchestrator does validate → work → log → return |
| Same code in two functions | One helper; keep exports as thin wrappers if tests need them |
| `if / else if` on fixed strings (`"VIP"`, `"basic"`) | `Record` / object lookup + `?? default` |
| Bare numbers (`18`, `0.15`, `5`) | `const MEANINGFUL_NAME = …` at top of file |
| Nested `if` pyramid | Guard clauses: `if (!ok) return false` → single `return true` |
| Same 4+ parameters in multiple functions | `type`/object for the clump; bundle args at export boundary if tests use separate args |
| One function calls `database`, `email`, `analytics` | Split validate / persist / notify / track; **keep side-effect order** |
| Unknown input at runtime (`null`, wrong type) | Widen param type (`T \| null`); guards before property access |
| Many `boolean` parameters (`isX`, `isY`) | Options object `{ urgent, sendEmail }` built from args |
| `.then` / callback chain on async | `async/await`; extract `fetch` + error parsing |
| Function mutates input object | Copy first (`{ ...input }`); mutate the copy only |
| Validation copied in multiple places | Reuse `isValidEmail` / shared validators |
| Nested JSX ternaries, `props: any` | Type props; early return; child component or variables before JSX |

## First 5 minutes on new code

1. Run tests  
2. Say what it returns / throws  
3. Name 2–3 smells  
4. Ask: “Keep exports? TS or JS? Tests fixed?”  
5. One small refactor → run tests again  

## Do not

- Rewrite everything at once  
- Change behavior without saying so  
- Add frameworks / new folders unless asked  

## Print as PDF

Open [`cheat-sheet.html`](./cheat-sheet.html) in a browser → **Print → Save as PDF**.
