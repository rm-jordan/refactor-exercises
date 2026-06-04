export function reconcileInventory(warehouse, shipment) {
  for (let i = 0; i < shipment.length; i++) {
    const sku = shipment[i].sku;
    const qty = shipment[i].qty;
    if (qty < 0) {
      continue;
    }
    if (warehouse[sku] === undefined) {
      warehouse[sku] = 0;
    }
    warehouse[sku] = warehouse[sku] + qty;
  }

  const merged = warehouse;
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
