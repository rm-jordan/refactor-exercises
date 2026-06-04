export function processOrder(order: any) {
  if (!order.customerEmail) {
    throw new Error("Missing email");
  }

  let subtotal = 0;

  for (const item of order.items) {
    subtotal += item.price * item.quantity;
  }

  let discount = 0;

  if (order.customerType === "VIP") {
    discount = subtotal * 0.15;
  }

  const total = subtotal - discount;

  console.log(
    `Customer ${order.customerEmail} placed order for ${total}`,
  );

  return total;
}
