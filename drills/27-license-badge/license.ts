const TIER_LEVELS: Record<string, string> = {
  trial: "Trial",
  team: "Team",
  business: "Business"
}



export function getLicenseBadge(tier: string) {
  return TIER_LEVELS[tier] ?? "Unknown"
}
