export function getConnectionLabel(status: string) {
  if (status === "online") {
    return "Online";
  }
  if (status === "offline") {
    return "Offline";
  }

  return "Unknown";
}
