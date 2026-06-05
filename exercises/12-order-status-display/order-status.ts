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

export function getOrderStatusDisplay(
  status: OrderStatus | string,
  isPremium: boolean,
): StatusDisplay {
  let label = "";
  let tone: StatusTone = "neutral";
  let showTracking = false;

  if (status === "pending") {
    label = "Pending";
    tone = "neutral";
    showTracking = false;
  } else if (status === "processing") {
    label = "Processing";
    tone = "info";
    showTracking = false;
  } else if (status === "shipped") {
    label = "Shipped";
    tone = "info";
    showTracking = true;
  } else if (status === "delivered") {
    label = "Delivered";
    tone = "success";
    showTracking = true;
  } else if (status === "cancelled") {
    label = "Cancelled";
    tone = "danger";
    showTracking = false;
  } else {
    label = "Unknown";
    tone = "neutral";
    showTracking = false;
  }

  if (isPremium) {
    if (status === "pending" || status === "processing") {
      label = label + " (Priority)";
    }
  }

  return { label, tone, showTracking };
}
