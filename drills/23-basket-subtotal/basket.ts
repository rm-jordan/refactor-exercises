export type Items = {
  price: number
  qty: number
}

function calculateSubtotal(items: Items[]):number {
  let total = 0;

  for (const item of items) {
    total += item.price * item.qty;
  }
  return total
}

export function formatBasketSubtotal(items: Items[]) {
const total = calculateSubtotal(items)
  return `$${total.toFixed(2)}`;
}
