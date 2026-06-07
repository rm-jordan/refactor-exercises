// step 1 types
export type OrderItem = {
  price: number
  quantity: number
}

export type Order = {
  customerEmail: string
  customerType: string
  items: OrderItem[]
}

// step 2 discount rate
const VIP_DISCOUNT_RATE = 0.15

// step 3 extract subtotal math
function calculateSubtotal(items: OrderItem[]) {
  let subtotal = 0;

  for (const item of items) {
    subtotal += item.price * item.quantity;
  }
  return subtotal;
}

// step 4 extract pricing (subtotal + VIP discount)
function calculateOrderTotal(items: OrderItem[], customerType: string) {
  const subtotal = calculateSubtotal(items);

  let discount = 0;

  if (customerType === "VIP") {
    discount = subtotal * VIP_DISCOUNT_RATE;
  }

  return subtotal - discount;
}

// step 5 thin orchestrator — validate, calculate, log
export function processOrder(order: Order) {
  if (!order.customerEmail) {
    throw new Error("Missing email");
  }

  const total = calculateOrderTotal(order.items, order.customerType);

  console.log(
    `Customer ${order.customerEmail} placed order for ${total}`,
  );

  return total;
}
