// Step 1: Types describe the API contract — status codes and badge shape.
export type OrderStatus =
  | "pending"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";

export type StatusTone = "neutral" | "info" | "success" | "danger";

export type StatusDisplay = {
  label: string;
  tone: StatusTone;
  showTracking: boolean;
};

// Step 2: Default for unrecognized status codes (replaces the final else branch).
const UNKNOWN_DISPLAY: StatusDisplay = {
  label: "Unknown",
  tone: "neutral",
  showTracking: false,
};

// Step 3: Status → badge config lookup — same move as shipping-cost (04).
const STATUS_DISPLAY: Record<string, StatusDisplay> = {
  pending: { label: "Pending", tone: "neutral", showTracking: false },
  processing: { label: "Processing", tone: "info", showTracking: false },
  shipped: { label: "Shipped", tone: "info", showTracking: true },
  delivered: { label: "Delivered", tone: "success", showTracking: true },
  cancelled: { label: "Cancelled", tone: "danger", showTracking: false },
};

// Step 4: Name which statuses get the premium suffix (separate rule from mapping).
const PRIORITY_STATUSES = new Set<string>(["pending", "processing"]);

// Step 5: Thin orchestrator — lookup base display, apply premium tweak, return.
export function getOrderStatusDisplay(
  status: OrderStatus | string,
  isPremium: boolean,
): StatusDisplay {
  let display = STATUS_DISPLAY[status] ?? UNKNOWN_DISPLAY;

  if (isPremium && PRIORITY_STATUSES.has(status)) {
    display = { ...display, label: display.label + " (Priority)" };
  }

  return display;
}
