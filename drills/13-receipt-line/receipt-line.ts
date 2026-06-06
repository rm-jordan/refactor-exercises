
export type ReceiptLine = {
  price: number
  quantity: number 
}

function calculateSubtotal(items: ReceiptLine[]):number {
  let total = 0;
  for (const item of items) {
    total += item.price * item.quantity;
  }
  return total
}

export function formatReceiptLine(items: ReceiptLine[]) {
 const total  = calculateSubtotal(items)

  return `${items.length} items · $${total.toFixed(2)}`;
}
