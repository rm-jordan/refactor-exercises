// Step 1: Put type → cost pairs in one data structure (not a list of strings to .map over).
const SHIPPING_COSTS: Record<string, number> = {
  standard: 10,
  express: 20,
  priority: 30,
  overnight: 50,
};

// Step 2: Look up by key; unknown types are not in the object → use 0.
export function getShippingCost(type: string): number {
  return SHIPPING_COSTS[type] ?? 0;
}
