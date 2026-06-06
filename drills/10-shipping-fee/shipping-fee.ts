// Step 1: Name shipping fees (compare type string, return cost number).
const STANDARD_SHIPPING_FEE = 5;
const EXPRESS_SHIPPING_FEE = 12;
const UNKNOWN_SHIPPING_FEE = 0;

export function getShippingFee(type: string) {
  if (type === "standard") {
    return STANDARD_SHIPPING_FEE;
  }
  if (type === "express") {
    return EXPRESS_SHIPPING_FEE;
  }

  return UNKNOWN_SHIPPING_FEE;
}
