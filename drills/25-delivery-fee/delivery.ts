const STANDARD_DELIVERY_FEE = 4;
const SAME_DAY_DELIVERY_FEE = 12;
const UNKNOWN_DELIVERY_FEE = 0;

export function getDeliveryFee(type: string) {
  if (type === "standard") {
    return STANDARD_DELIVERY_FEE;
  }
  if (type === "same-day") {
    return SAME_DAY_DELIVERY_FEE;
  }

  return UNKNOWN_DELIVERY_FEE;
}
