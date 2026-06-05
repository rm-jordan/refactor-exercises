export function getOrderStatusDisplay(status, isPremium) {
  let label = "";
  let tone = "neutral";
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
