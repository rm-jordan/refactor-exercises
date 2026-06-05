export function getShippingFee(type: string) {
  if (type === "standard") {
    return 5;
  }
  if (type === "express") {
    return 12;
  }

  return 0;
}
