export function formatReceiptLine(items: any) {
  let total = 0;

  for (const item of items) {
    total += item.price * item.quantity;
  }

  return `${items.length} items · $${total.toFixed(2)}`;
}
