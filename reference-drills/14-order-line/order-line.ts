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
