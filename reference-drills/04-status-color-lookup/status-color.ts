export function getStatusColor(status: string) {
  if (status === "active") {
    return "green";
  }
  if (status === "paused") {
    return "yellow";
  }

  return "gray";
}
