export function formatBasketSubtotal(items: any) {
  let total = 0;

  for (const item of items) {
    total += item.price * item.qty;
  }

  return `$${total.toFixed(2)}`;
}
