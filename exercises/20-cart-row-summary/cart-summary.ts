// replace any value of cart

export type Cart = {
  items: {
    price: number;
    quantity: number;
  }[];
  state: string;
  membershipType: string;
}

// tax rate
const CA_TAX_RATE = 0.0825;

// need to create a function to calculate the tax
const calculateTax = (subtotal: number , state: string) => {
  if (state === "CA") {
    return subtotal * CA_TAX_RATE;
  }
  return 0;
}

export function formatCartRowSummary(cart: Cart) {
  const subtotal = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = calculateTax(subtotal, cart.state);
  const total = subtotal + tax;
  let displayTotal = total;

  if (cart.membershipType === "member") {
    displayTotal = total * 0.95;  
  }

  const itemCount = cart.items.length;

  if (cart.membershipType === "member") {
    return `Member · ${itemCount} items · $${displayTotal.toFixed(2)}`;
  }

  return `${itemCount} items · $${total.toFixed(2)}`;
}
