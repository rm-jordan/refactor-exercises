export function getPriorityLabel(priority: string) {
  if (priority === "low") {
    return "Low";
  }
  if (priority === "medium") {
    return "Medium";
  }
  if (priority === "high") {
    return "High";
  }

  return "Unknown";
}
