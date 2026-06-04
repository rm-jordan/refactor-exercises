// Step 1: Replace `any` — define shapes for an order and its line items.
export type OrderItem = {
  price: number;
  quantity: number;
};

export type Order = {
  customerEmail: string;
  // Step 2: Optional — discount only applies when type is "VIP"; callers may omit this.
  customerType?: string;
  items: OrderItem[];
};

// Step 3: Name magic numbers so pricing rules are obvious.
const VIP_DISCOUNT_RATE = 0.15;

// Step 4: Extract pure pricing — no validation, logging, or I/O.
function calculateOrderTotal(order: Pick<Order, "items" | "customerType">): number {
  const subtotal = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const discount =
    order.customerType === "VIP" ? subtotal * VIP_DISCOUNT_RATE : 0;

  return subtotal - discount;
}

// Step 5: Orchestrate only — validate, calculate, log, return.
export function processOrder(order: Order): number {
  if (!order.customerEmail) {
    throw new Error("Missing email");
  }

  const total = calculateOrderTotal(order);

  console.log(
    `Customer ${order.customerEmail} placed order for ${total}`,
  );

  return total;
}
