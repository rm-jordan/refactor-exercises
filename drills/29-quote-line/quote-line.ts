export type QuoteItem = {
  price: number;
  quantity: number;
};

export type Quote = {
  items: QuoteItem[];
  deliveryType: string;
};

const EXPRESS_DELIVERY_FEE = 10;

function calculateSubtotal(items: QuoteItem[]): number {
  let total = 0;
  for (const item of items) {
    total += item.price * item.quantity;
  }
  return total;
}

export function formatQuoteLine(quote: Quote) {
  const subtotal = calculateSubtotal(quote.items);
  const fee = quote.deliveryType === "express" ? EXPRESS_DELIVERY_FEE : 0;
  const total = subtotal + fee;

  return `${quote.items.length} items · $${total.toFixed(2)}`;
}
