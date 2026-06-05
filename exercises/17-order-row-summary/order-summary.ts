// Step 1: Types from what the function reads (see tests).
export type OrderItem = {
  price: number;
  quantity: number;
};

export type Order = {
  items: OrderItem[];
  shippingType: string;
  customerType: string;
};

// Step 2: Name magic numbers — shipping costs and VIP multiplier (10% off → × 0.9).
const STANDARD_SHIPPING_COST = 5;
const EXPRESS_SHIPPING_COST = 15;
const OVERNIGHT_SHIPPING_COST = 25;
const VIP_DISCOUNT_MULTIPLIER = 0.9;

// Step 3: Pure subtotal math — no shipping, VIP, or strings.
function calculateSubtotal(items: OrderItem[]): number {
  let subtotal = 0;
  for (const item of items) {
    subtotal += item.price * item.quantity;
  }
  return subtotal;
}

// Step 4: Shipping cost by type — unknown types return 0.
function getShippingCost(shippingType: string): number {
  switch (shippingType) {
    case "standard":
      return STANDARD_SHIPPING_COST;
    case "express":
      return EXPRESS_SHIPPING_COST;
    case "overnight":
      return OVERNIGHT_SHIPPING_COST;
    default:
      return 0;
  }
}

// Step 5: VIP discount on displayed total only.
function getDisplayTotal(total: number, customerType: string): number {
  if (customerType === "VIP") {
    return total * VIP_DISCOUNT_MULTIPLIER;
  }
  return total;
}

// Step 6: Thin formatter — calculate, build row string, return.
export function formatOrderRowSummary(order: Order): string {
  const subtotal = calculateSubtotal(order.items);
  const shipping = getShippingCost(order.shippingType);
  const total = subtotal + shipping;
  const itemCount = order.items.length;

  if (order.customerType === "VIP") {
    const displayTotal = getDisplayTotal(total, order.customerType);
    return `VIP · ${itemCount} items · $${displayTotal.toFixed(2)}`;
  }

  return `${itemCount} items · $${total.toFixed(2)}`;
}
