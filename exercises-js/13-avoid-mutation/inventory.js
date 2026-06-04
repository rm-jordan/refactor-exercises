export function reconcileInventory(warehouse, shipment) {
  const merged = { ...warehouse };

  for (let i = 0; i < shipment.length; i++) {
    const sku = shipment[i].sku;
    const qty = shipment[i].qty;
    if (qty < 0) {
      continue;
    }
    if (merged[sku] === undefined) {
      merged[sku] = 0;
    }
    merged[sku] = merged[sku] + qty;
  }
  const lowStock = [];
  const keys = Object.keys(merged);
  for (let j = 0; j < keys.length; j++) {
    const k = keys[j];
    if (merged[k] < 5) {
      lowStock.push(k);
    }
  }
  lowStock.sort();

  let totalUnits = 0;
  for (let m = 0; m < keys.length; m++) {
    totalUnits = totalUnits + merged[keys[m]];
  }

  return { merged, lowStock, totalUnits };
}
