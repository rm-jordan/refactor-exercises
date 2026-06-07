export type CheckoutItem = {
  price: number;
  quantity: number;
};

export type Checkout = {
  items: CheckoutItem[];
  region: string;
  loyaltyTier: string;
};

const NY_TAX_RATE = 0.08875;
const GOLD_LOYALTY_DISCOUNT = 0.9;

function calculateSubtotal(items: CheckoutItem[]): number {
  let subtotal = 0;
  for (const item of items) {
    subtotal += item.price * item.quantity;
  }
  return subtotal;
}

function calculateTax(subtotal: number, region: string): number {
  if (region === "NY") {
    return subtotal * NY_TAX_RATE;
  }
  return 0;
}

function applyGoldDiscount(total: number, loyaltyTier: string): number {
  if (loyaltyTier === "gold") {
    return total * GOLD_LOYALTY_DISCOUNT;
  }
  return total;
}

export function formatCheckoutLine(checkout: Checkout) {
  const subtotal = calculateSubtotal(checkout.items);
  const tax = calculateTax(subtotal, checkout.region);
  const total = subtotal + tax;
  const displayTotal = applyGoldDiscount(total, checkout.loyaltyTier);
  const itemCount = checkout.items.length;

  if (checkout.loyaltyTier === "gold") {
    return `Gold · ${itemCount} items · $${displayTotal.toFixed(2)}`;
  }

  return `${itemCount} items · $${total.toFixed(2)}`;
}
