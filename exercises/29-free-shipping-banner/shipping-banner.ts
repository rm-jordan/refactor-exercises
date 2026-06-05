export function getFreeShippingMessage(cartTotal: number) {
  if (cartTotal >= 50) {
    return "You qualify for free shipping!";
  }

  const remaining = 50 - cartTotal;

  return `Add $${remaining.toFixed(2)} more for free shipping`;
}
