// step 1 type customer from tests
export type Customer = {
  yearsActive: number;
  region?: string;
};

// step 2 name plan rates + loyalty/EU constants
const BASIC_MONTHLY_RATE = 10;
const EXPRESS_MONTHLY_RATE = 25;
const ENTERPRISE_MONTHLY_RATE = 50;

const LOYALTY_YEARS_FOR_DISCOUNT = 3;
const LOYALTY_DISCOUNT_MULTIPLIER = 0.9;

const EU_REGION_MARKUP_MULTIPLIER = 1.2;

// step 3 extract base total — plan × months
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

// step 4 extract customer adjustments — loyalty, then EU
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

// step 5 thin orchestrator — base → adjustments → round
export function getQuote(
  customer: Customer,
  plan: string,
  months: number,
): number {
  const baseTotal = calculateBaseTotal(plan, months);
  const adjustedTotal = applyCustomerAdjustments(baseTotal, customer);
  return roundMoney(adjustedTotal);
}
