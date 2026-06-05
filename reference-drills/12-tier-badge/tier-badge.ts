export function getTierBadge(tier: string) {
  if (tier === "bronze") {
    return "Bronze";
  }
  if (tier === "silver") {
    return "Silver";
  }
  if (tier === "gold") {
    return "Gold";
  }

  return "Unknown";
}
