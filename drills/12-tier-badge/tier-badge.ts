const TIERS: Record<string, string> = {
  bronze: "Bronze",
  silver: "Silver",
  gold: "Gold"
}


export function getTierBadge(tier: string) {
return TIERS[tier] ?? "Unknown"
}


