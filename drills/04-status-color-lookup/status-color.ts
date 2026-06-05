const STATUS_COLORS = {
  active: "green",
  paused: "yellow",
}


export function getStatusColor(status: string) {
return STATUS_COLORS[status] ?? "gray"
}
