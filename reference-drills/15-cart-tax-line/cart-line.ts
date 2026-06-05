export function formatCartLine(cart: any) {
  let subtotal = 0;

  for (const item of cart.items) {
    subtotal += item.price * item.quantity;
  }

  let tax = 0;

  if (cart.state === "CA") {
    tax = subtotal * 0.0825;
  }

  const total = subtotal + tax;
  let displayTotal = total;

  if (cart.membershipType === "member") {
    displayTotal = total * 0.95;
  }

  const itemCount = cart.items.length;

  if (cart.membershipType === "member") {
    return `Member · ${itemCount} items · $${displayTotal.toFixed(2)}`;
  }

  return `${itemCount} items · $${total.toFixed(2)}`;
}
