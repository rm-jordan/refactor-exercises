// Step 1: Replace `any` — describe a payment; allow null/undefined at the call site.
export type Payment = {
  active?: boolean;
  amount: number;
};

// Step 2: Flatten nested ifs with guard clauses (early return false).
export function processPayment(
  payment: Payment | null | undefined,
): boolean {
  if (!payment) {
    return false;
  }

  if (!payment.active) {
    return false;
  }

  if (payment.amount <= 0) {
    return false;
  }

  return true;
}
