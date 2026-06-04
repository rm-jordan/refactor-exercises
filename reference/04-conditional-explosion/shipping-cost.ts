export function getShippingCost(type: string) {
  if (type === "standard") {
    return 10;
  } else if (type === "express") {
    return 20;
  } else if (type === "priority") {
    return 30;
  } else if (type === "overnight") {
    return 50;
  }

  return 0;
}
