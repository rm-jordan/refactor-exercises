// Step 1: Type one row from the test — { price, qty }. Name it LineItem (one item, not the whole list).
export type LineItem = {
  price: number;
  qty: number;
};

// Step 2: Extract pure math — param is LineItem[] (array), not a single LineItem.
function calculateSubtotal(items: LineItem[]): number {
  let total = 0;
  for (const item of items) {
    total += item.price * item.qty;
  }
  return total;
}

// Step 3: Thin formatter — call subtotal, add $ and .toFixed(2) only here.
export function formatLineTotal(items: LineItem[]) {
  const total = calculateSubtotal(items);
  return `$${total.toFixed(2)}`;
}
