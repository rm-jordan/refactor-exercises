// Step 1: Type the customer — only fields used for loyalty and region.
export type Customer = {
  yearsActive: number;
  region?: string;
};

export type Plan = "basic" | "express" | "enterprise";

const BASIC_MONTHLY_RATE = 10;
const EXPRESS_MONTHLY_RATE = 25;
const ENTERPRISE_MONTHLY_RATE = 50;

const LOYALTY_YEARS_FOR_DISCOUNT = 3;
const LOYALTY_DISCOUNT_MULTIPLIER = 0.9;

const EU_REGION_MARKUP_MULTIPLIER = 1.2;

// Step 2: Base total — plan × months (switch kept for readability).
function calculateBaseTotal(plan: string, months: number): number {
  if (months <= 0) {
    return 0;
  }

  switch (plan) {
    case "basic":
      return months * BASIC_MONTHLY_RATE;
    case "express":
      return months * EXPRESS_MONTHLY_RATE;
    case "enterprise":
      return months * ENTERPRISE_MONTHLY_RATE;
    default:
      return 0;
  }
}

// Step 3: Customer rules on subtotal — loyalty first, then region (same order as before).
function applyCustomerAdjustments(
  subtotal: number,
  customer: Customer,
): number {
  let total = subtotal;

  if (customer.yearsActive >= LOYALTY_YEARS_FOR_DISCOUNT) {
    total = total * LOYALTY_DISCOUNT_MULTIPLIER;
  }

  if (customer.region === "EU") {
    total = total * EU_REGION_MARKUP_MULTIPLIER;
  }

  return total;
}

function roundMoney(amount: number): number {
  return Math.round(amount * 100) / 100;
}

// Step 4: Orchestrate — base → customer adjustments → round.
export function getQuote(
  customer: Customer,
  plan: string,
  months: number,
): number {
  const baseTotal = calculateBaseTotal(plan, months);
  const adjustedTotal = applyCustomerAdjustments(baseTotal, customer);
  return roundMoney(adjustedTotal);
}
