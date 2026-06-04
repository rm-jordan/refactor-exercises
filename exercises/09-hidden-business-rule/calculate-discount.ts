// Step 1: Replace `any` — type what the function reads.
export type Customer = {
  yearsAsCustomer: number;
};

// Step 2: Name the business rules (loyalty threshold and discount rate).
const LOYALTY_YEARS_FOR_DISCOUNT = 5;
const LOYALTY_DISCOUNT_RATE = 0.15;
const NO_DISCOUNT = 0;

// Step 3: Use named rules in the function so logic is self-explanatory.
export function calculateDiscount(customer: Customer): number {
  if (customer.yearsAsCustomer >= LOYALTY_YEARS_FOR_DISCOUNT) {
    return LOYALTY_DISCOUNT_RATE;
  }

  return NO_DISCOUNT;
}
