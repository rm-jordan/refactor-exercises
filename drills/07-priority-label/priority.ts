const PRIORITY_LABELS: Record<string,string> = {
  low: "Low",
  medium: "Medium",
  high: "High"
}

export function getPriorityLabel(priority: string) {
return PRIORITY_LABELS[priority] ?? "Unknown"
}
