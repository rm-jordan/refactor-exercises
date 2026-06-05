export function formatCheckoutLine(checkout: any) {
  let subtotal = 0;

  for (const item of checkout.items) {
    subtotal += item.price * item.quantity;
  }

  let tax = 0;

  if (checkout.region === "NY") {
    tax = subtotal * 0.08875;
  }

  const total = subtotal + tax;
  let displayTotal = total;

  if (checkout.loyaltyTier === "gold") {
    displayTotal = total * 0.9;
  }

  const itemCount = checkout.items.length;

  if (checkout.loyaltyTier === "gold") {
    return `Gold · ${itemCount} items · $${displayTotal.toFixed(2)}`;
  }

  return `${itemCount} items · $${total.toFixed(2)}`;
}
