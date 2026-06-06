const SEVERITY_LABELS = {
  info: "Info",
  warning: "Warning",
  critical: "Critical",
}

export function getSeverityLabel(level: string) {
 return SEVERITY_LABELS[level] ?? "Unknown";
}
