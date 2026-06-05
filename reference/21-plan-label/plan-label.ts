export function getPlanLabel(plan: string) {
  if (plan === "free") {
    return "Free";
  } else if (plan === "starter") {
    return "Starter";
  } else if (plan === "pro") {
    return "Pro";
  } else if (plan === "enterprise") {
    return "Enterprise";
  }

  return "Unknown";
}
