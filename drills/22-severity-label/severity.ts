export function getSeverityLabel(level: string) {
  if (level === "info") {
    return "Info";
  }
  if (level === "warning") {
    return "Warning";
  }
  if (level === "critical") {
    return "Critical";
  }

  return "Unknown";
}
