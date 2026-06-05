export function getLicenseBadge(tier: string) {
  if (tier === "trial") {
    return "Trial";
  }
  if (tier === "team") {
    return "Team";
  }
  if (tier === "business") {
    return "Business";
  }

  return "Unknown";
}
