// any type
export type Items = {
  price: number
  quantity: number
}

// extract calculation

export function calculateSubtotal(items:Items[]) {
  let total = 0;

  for (const item of items) {
    total += item.price * item.quantity;
  }
  return total
}

export function formatInvoiceLine(items: Items[]) {
const total = calculateSubtotal(items)

  return `${items.length} items · $${total.toFixed(2)}`;
}
