export type OrderItem = {
  price: number;
  quantity: number;
}
export type Order = {
  items: OrderItem[];
  shippingType: string;
}


export function formatOrderLine(order: Order) {
  const subtotal = order.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = order.shippingType === "standard" ? 5 : 0;
  const total = subtotal + shipping;

  return `${order.items.length} items · $${total.toFixed(2)}`;
}
