export function formatOrderRowSummary(order: any) {
  let subtotal = 0;

  for (const item of order.items) {
    subtotal += item.price * item.quantity;
  }

  let shipping = 0;

  if (order.shippingType === "standard") {
    shipping = 5;
  } else if (order.shippingType === "express") {
    shipping = 15;
  } else if (order.shippingType === "overnight") {
    shipping = 25;
  }

  const total = subtotal + shipping;
  let displayTotal = total;

  if (order.customerType === "VIP") {
    displayTotal = total * 0.9;
  }

  const itemCount = order.items.length;

  if (order.customerType === "VIP") {
    return `VIP · ${itemCount} items · $${displayTotal.toFixed(2)}`;
  }

  return `${itemCount} items · $${total.toFixed(2)}`;
}
