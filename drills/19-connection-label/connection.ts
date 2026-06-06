const CONNECTION_LABELS = {
  online: "Online",
  offline: "Offline",
}

export function getConnectionLabel(status: string) {
return CONNECTION_LABELS[status] ?? "Unknown"
}