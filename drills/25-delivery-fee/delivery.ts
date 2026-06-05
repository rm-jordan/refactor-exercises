export function getDeliveryFee(type: string) {
  if (type === "standard") {
    return 4;
  }
  if (type === "same-day") {
    return 12;
  }

  return 0;
}
