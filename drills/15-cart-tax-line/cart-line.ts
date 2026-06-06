export type CartItem = {
  price: number;
  quantity: number;
};

export type Cart = {
  items: CartItem[];
  state: string;
  membershipType: string;
};

const CA_TAX_RATE = 0.0825;
const MEMBER_DISCOUNT = 0.95;

function calculateSubtotal(items: CartItem[]): number {
  let total = 0;
  for (const item of items) {
    total += item.price * item.quantity;
  }
  return total;
}

function calculateTax(subtotal: number, state: string): number {
  if (state === "CA") {
    return subtotal * CA_TAX_RATE;
  }
  return 0;
}

function applyMemberDiscount(total: number, membershipType: string): number {
  if (membershipType === "member") {
    return total * MEMBER_DISCOUNT;
  }
  return total;
}

export function formatCartLine(cart: Cart) {
  const subtotal = calculateSubtotal(cart.items);
  const tax = calculateTax(subtotal, cart.state);
  const total = subtotal + tax;
  const displayTotal = applyMemberDiscount(total, cart.membershipType);
  const itemCount = cart.items.length;

  if (cart.membershipType === "member") {
    return `Member · ${itemCount} items · $${displayTotal.toFixed(2)}`;
  }

  return `${itemCount} items · $${total.toFixed(2)}`;
}
