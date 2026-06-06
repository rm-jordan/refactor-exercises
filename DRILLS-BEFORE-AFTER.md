# Drill Before & After

**Before** = starter from `reference-drills/`. **After** = target refactor.

**Refactor loop:** one move → run tests → next move.

---

## Pattern index

| Pattern | Smell | Move | Drill |
|---------|-------|------|-------|
| Magic number | bare `18` | `const NAME = …`; swap number only | **01** |
| Guard clause | nested `if` pyramid | early `return false`; one final `return` | **02** |
| Type `any` | untyped param | `type` from test; use on param | **03** |
| Lookup | if chain on strings | `MAP[key] ?? default` | **04** |
| Call validator | duplicate check | call existing helper | **05** |
| Guards + types | nested + `any` | types + `\| null` + guard clauses | **06** |
| Lookup (3 keys) | longer if chain | same as 04 | **07** |
| Extract subtotal | loop + `$` mixed | `calculateSubtotal()` + thin formatter | **08** |
| Tier constants | magic in if + return | name thresholds **and** fees; keep operators | **09** |
| Named fees | magic fee returns | name fees; keep `type ===` shape | **10** |
| Auth guards | nested user/doc checks | two types + guards + final condition | **11** |
| Lookup table | if per tier | `Record` + `??` | **12** |
| Row formatter | loop + count + `$` | extract subtotal; format adds count | **13** |
| Subtotal + fee | order blob | types + subtotal + one fee + format | **14** |
| Stack capstone | tax + discount stacked | subtotal → tax → discount → format | **15** |

---

# Drills 01–15

---

## 01 — adult-threshold

**Smell:** magic number  
**Move:** name threshold constant; swap `18` → `MIN_ADULT_AGE`  
**Say:** "I'll extract the adult age threshold."

### Before

```typescript
export function isAdult(age: number) {
  return age >= 18;
}
```

### After

```typescript
const MIN_ADULT_AGE = 18;

export function isAdult(age: number) {
  return age >= MIN_ADULT_AGE;
}
```

---

## 02 — positive-guard

**Smell:** nested ifs  
**Move:** guard clauses — fail fast, then success check  
**Watch:** `!value` catches `null`, `undefined`, and `0`

### Before

```typescript
export function isPositive(value: number | null | undefined) {
  if (value) {
    if (value > 0) {
      return true;
    }
  }

  return false;
}
```

### After

```typescript
export function isPositive(value: number | null | undefined) {
  if (!value) {
    return false;
  }
  if (value > 0) {
    return true;
  }
  return false;
}
```

---

## 03 — greet-user-type

**Smell:** `any` param  
**Move:** type only fields the function reads (`name`)  
**Watch:** use `user: User` on the param, not just declare the type

### Before

```typescript
export function greet(user: any) {
  return `Hello, ${user.name}`;
}
```

### After

```typescript
export type User = {
  name: string;
};

export function greet(user: User) {
  return `Hello, ${user.name}`;
}
```

---

## 04 — status-color-lookup

**Smell:** if chain on fixed strings  
**Move:** lookup object + `??` default  
**Watch:** delete old if chain after lookup works

### Before

```typescript
export function getStatusColor(status: string) {
  if (status === "active") {
    return "green";
  }
  if (status === "paused") {
    return "yellow";
  }

  return "gray";
}
```

### After

```typescript
const STATUS_COLORS = {
  active: "green",
  paused: "yellow",
};

export function getStatusColor(status: string) {
  return STATUS_COLORS[status] ?? "gray";
}
```

---

## 05 — subscribe-email

**Smell:** duplicated validation  
**Move:** call existing `isValidEmail` helper  
**Watch:** call the helper — don't copy `includes("@")` again

### Before

```typescript
export function isValidEmail(email: string) {
  return email.includes("@");
}

export function subscribe(email: string) {
  if (!email.includes("@")) {
    return { ok: false, error: "Invalid email" };
  }

  return { ok: true, email };
}
```

### After

```typescript
export function isValidEmail(email: string) {
  return email.includes("@");
}

export function subscribe(email: string) {
  if (!isValidEmail(email)) {
    return { ok: false, error: "Invalid email" };
  }

  return { ok: true, email };
}
```

---

## 06 — can-vote

**Smell:** nested ifs + `any`  
**Move:** types from test + guard clauses + `| null`  
**Watch:** `user.isLoggedIn`, not `isLoggedIn`

### Before

```typescript
export function canVote(user: any) {
  if (user) {
    if (user.isLoggedIn) {
      if (user.age >= 18) {
        return true;
      }
    }
  }

  return false;
}
```

### After

```typescript
export type User = {
  isLoggedIn: boolean;
  age: number;
};

export function canVote(user: User | null) {
  if (!user) {
    return false;
  }
  if (!user.isLoggedIn) {
    return false;
  }

  return user.age >= 18;
}
```

---

## 07 — priority-label

**Smell:** if chain  
**Move:** lookup + `?? "Unknown"`  
**Same as:** 04, 12

### Before

```typescript
export function getPriorityLabel(priority: string) {
  if (priority === "low") {
    return "Low";
  }
  if (priority === "medium") {
    return "Medium";
  }
  if (priority === "high") {
    return "High";
  }

  return "Unknown";
}
```

### After

```typescript
const PRIORITY_LABELS: Record<string, string> = {
  low: "Low",
  medium: "Medium",
  high: "High",
};

export function getPriorityLabel(priority: string) {
  return PRIORITY_LABELS[priority] ?? "Unknown";
}
```

---

## 08 — line-total

**Smell:** loop + formatting mixed; `any`  
**Move:** type row → extract `calculateSubtotal` → thin formatter  
**Syntax:** `LineItem[]` not `LineItem` for the array param

### Before

```typescript
export function formatLineTotal(items: any) {
  let total = 0;

  for (const item of items) {
    total += item.price * item.qty;
  }

  return `$${total.toFixed(2)}`;
}
```

### After

```typescript
export type LineItem = {
  price: number;
  qty: number;
};

function calculateSubtotal(items: LineItem[]): number {
  let total = 0;
  for (const item of items) {
    total += item.price * item.qty;
  }
  return total;
}

export function formatLineTotal(items: LineItem[]) {
  const total = calculateSubtotal(items);
  return `$${total.toFixed(2)}`;
}
```

**Loop syntax to memorize:**

```typescript
let total = 0;
for (const item of items) {
  total += item.price * item.qty;
}
return total;
```

**Money format:**

```typescript
return `$${total.toFixed(2)}`;
```

---

## 09 — bus-fare

**Smell:** magic numbers in conditions and returns  
**Move:** name thresholds AND fee amounts; **keep** `age <` / `age >=`  
**Watch:** sub numbers only — don't replace `age < 12` with `if (CHILD_MAX_AGE)`

### Before

```typescript
export function getBusFare(age: number) {
  if (age < 12) {
    return 0;
  }
  if (age >= 65) {
    return 1;
  }

  return 2;
}
```

### After

```typescript
const CHILD_MAX_AGE = 12;
const SENIOR_MIN_AGE = 65;

const FREE_FARE = 0;
const SENIOR_FARE = 1;
const STANDARD_FARE = 2;

export function getBusFare(age: number) {
  if (age < CHILD_MAX_AGE) {
    return FREE_FARE;
  }
  if (age >= SENIOR_MIN_AGE) {
    return SENIOR_FARE;
  }
  return STANDARD_FARE;
}
```

---

## 10 — shipping-fee

**Smell:** magic fee numbers  
**Move:** name fees; keep `type === "standard"` shape  
**Same as:** 25, 24 (tier fees)

### Before

```typescript
export function getShippingFee(type: string) {
  if (type === "standard") {
    return 5;
  }
  if (type === "express") {
    return 12;
  }

  return 0;
}
```

### After

```typescript
const STANDARD_SHIPPING_FEE = 5;
const EXPRESS_SHIPPING_FEE = 12;
const UNKNOWN_SHIPPING_FEE = 0;

export function getShippingFee(type: string) {
  if (type === "standard") {
    return STANDARD_SHIPPING_FEE;
  }
  if (type === "express") {
    return EXPRESS_SHIPPING_FEE;
  }

  return UNKNOWN_SHIPPING_FEE;
}
```

---

## 11 — view-draft

**Smell:** nested ifs + `any`  
**Move:** two types + guard clauses + author check  
**Same as:** 06, 21, 26

### Before

```typescript
export function canViewDraft(user: any, doc: any) {
  if (user) {
    if (user.isLoggedIn) {
      if (doc) {
        if (doc.authorId === user.id) {
          return true;
        }
      }
    }
  }

  return false;
}
```

### After

```typescript
export type User = {
  id: string;
  isLoggedIn: boolean;
};

export type Doc = {
  authorId: string;
};

export function canViewDraft(user: User | null, doc: Doc | null) {
  if (!user) {
    return false;
  }
  if (!user.isLoggedIn) {
    return false;
  }
  if (!doc) {
    return false;
  }

  return doc.authorId === user.id;
}
```

---

## 12 — tier-badge

**Smell:** if chain  
**Move:** lookup table  
**Watch:** bracket uses **param name**: `TIERS[tier]`, not `TIERS[type]`

### Before

```typescript
export function getTierBadge(tier: string) {
  if (tier === "bronze") {
    return "Bronze";
  }
  if (tier === "silver") {
    return "Silver";
  }
  if (tier === "gold") {
    return "Gold";
  }

  return "Unknown";
}
```

### After

```typescript
const TIERS: Record<string, string> = {
  bronze: "Bronze",
  silver: "Silver",
  gold: "Gold",
};

export function getTierBadge(tier: string) {
  return TIERS[tier] ?? "Unknown";
}
```

---

## 13 — receipt-line

**Smell:** loop + count string + money in one function  
**Move:** type row → extract subtotal → formatter adds count + `$`  
**Same as:** 08 with extra `${items.length} items ·`

### Before

```typescript
export function formatReceiptLine(items: any) {
  let total = 0;

  for (const item of items) {
    total += item.price * item.quantity;
  }

  return `${items.length} items · $${total.toFixed(2)}`;
}
```

### After

```typescript
export type ReceiptLine = {
  price: number;
  quantity: number;
};

function calculateSubtotal(items: ReceiptLine[]): number {
  let total = 0;
  for (const item of items) {
    total += item.price * item.quantity;
  }
  return total;
}

export function formatReceiptLine(items: ReceiptLine[]) {
  const total = calculateSubtotal(items);
  return `${items.length} items · $${total.toFixed(2)}`;
}
```

---

## 14 — order-line

**Smell:** subtotal loop + inline shipping in one blob  
**Move:** types for order → subtotal → shipping fee → format  
**Optional extract:** `getShippingFee` like drill 10

### Before

```typescript
export function formatOrderLine(order: any) {
  let subtotal = 0;

  for (const item of order.items) {
    subtotal += item.price * item.quantity;
  }

  let shipping = 0;

  if (order.shippingType === "standard") {
    shipping = 5;
  }

  const total = subtotal + shipping;

  return `${order.items.length} items · $${total.toFixed(2)}`;
}
```

### After

```typescript
export type OrderItem = {
  price: number;
  quantity: number;
};

export type Order = {
  items: OrderItem[];
  shippingType: string;
};

const STANDARD_SHIPPING_FEE = 5;

function calculateSubtotal(items: OrderItem[]): number {
  let total = 0;
  for (const item of items) {
    total += item.price * item.quantity;
  }
  return total;
}

export function formatOrderLine(order: Order) {
  const subtotal = calculateSubtotal(order.items);
  const shipping = order.shippingType === "standard" ? STANDARD_SHIPPING_FEE : 0;
  const total = subtotal + shipping;

  return `${order.items.length} items · $${total.toFixed(2)}`;
}
```

---

## 15 — cart-tax-line (capstone)

**Smell:** everything in one function  
**Move:** types → subtotal → tax → member discount → format  
**Watch:** discount on **subtotal + tax**, not subtotal alone; `"Member · "` is presentation

### Before

```typescript
export function formatCartLine(cart: any) {
  let subtotal = 0;

  for (const item of cart.items) {
    subtotal += item.price * item.quantity;
  }

  let tax = 0;

  if (cart.state === "CA") {
    tax = subtotal * 0.0825;
  }

  const total = subtotal + tax;
  let displayTotal = total;

  if (cart.membershipType === "member") {
    displayTotal = total * 0.95;
  }

  const itemCount = cart.items.length;

  if (cart.membershipType === "member") {
    return `Member · ${itemCount} items · $${displayTotal.toFixed(2)}`;
  }

  return `${itemCount} items · $${total.toFixed(2)}`;
}
```

### After

```typescript
export type CartItem = {
  price: number;
  quantity: number;
};

export type Cart = {
  items: CartItem[];
  state: string;
  membershipType: string;
};

const CA_TAX_RATE = 0.0825;
const MEMBER_DISCOUNT = 0.95;

function calculateSubtotal(items: CartItem[]): number {
  let total = 0;
  for (const item of items) {
    total += item.price * item.quantity;
  }
  return total;
}

function calculateTax(subtotal: number, state: string): number {
  if (state === "CA") {
    return subtotal * CA_TAX_RATE;
  }
  return 0;
}

function applyMemberDiscount(total: number, membershipType: string): number {
  if (membershipType === "member") {
    return total * MEMBER_DISCOUNT;
  }
  return total;
}

export function formatCartLine(cart: Cart) {
  const subtotal = calculateSubtotal(cart.items);
  const tax = calculateTax(subtotal, cart.state);
  const total = subtotal + tax;
  const displayTotal = applyMemberDiscount(total, cart.membershipType);
  const itemCount = cart.items.length;

  if (cart.membershipType === "member") {
    return `Member · ${itemCount} items · $${displayTotal.toFixed(2)}`;
  }

  return `${itemCount} items · $${total.toFixed(2)}`;
}
```

---

# Syntax snippets

```typescript
// Guard
if (!user) return false;
if (!user.isLoggedIn) return false;
return someCondition;

// Lookup
const MAP: Record<string, string> = { key: "Value" };
return MAP[input] ?? "Unknown";

// Subtotal loop
let total = 0;
for (const item of items) {
  total += item.price * item.quantity;
}
return total;

// Money string
return `$${total.toFixed(2)}`;

// Row summary
return `${items.length} items · $${total.toFixed(2)}`;

// Magic number — sub only the number
if (hours <= SHORT_STAY) return LOW_FEE;

// Type from test
export type Row = { price: number; qty: number };
function fn(items: Row[]) { ... }
```
