export function formatQuoteLine(quote: any) {
  let subtotal = 0;

  for (const item of quote.items) {
    subtotal += item.price * item.quantity;
  }

  let fee = 0;

  if (quote.deliveryType === "express") {
    fee = 10;
  }

  const total = subtotal + fee;

  return `${quote.items.length} items · $${total.toFixed(2)}`;
}
