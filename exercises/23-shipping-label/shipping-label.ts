export function getShippingLabel(shippingType: string) {
  if (shippingType === "standard") {
    return "Standard (5–7 days)";
  } else if (shippingType === "express") {
    return "Express (2–3 days)";
  } else if (shippingType === "overnight") {
    return "Overnight";
  }

  return "Unknown shipping";
}
