// Step 1: Types for catalog rows and filter options.
export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
};

export type CatalogFilters = {
  category?: string;
  maxPrice?: number;
  inStockOnly?: boolean;
};

// Step 2: Name the default max price (was bare 1000 in the original loop).
const DEFAULT_MAX_PRICE = 1000;

function getMaxPrice(filters: CatalogFilters): number {
  return filters.maxPrice ?? DEFAULT_MAX_PRICE;
}

// Step 3: One predicate — does this product pass every active filter?
function productMatchesFilters(
  product: Product,
  filters: CatalogFilters,
  maxPrice: number,
): boolean {
  if (filters.category !== undefined && product.category !== filters.category) {
    return false;
  }
  if (product.price > maxPrice) {
    return false;
  }
  if (filters.inStockOnly === true && !product.inStock) {
    return false;
  }
  return true;
}

// Step 4: Named comparator — replaces the nested bubble-sort loops.
function compareByName(a: Product, b: Product): number {
  return a.name.localeCompare(b.name);
}

// Step 5: Thin orchestrator — filter, sort, return (same rules as before).
export function getCatalogProducts(
  products: Product[],
  filters: CatalogFilters,
): Product[] {
  const maxPrice = getMaxPrice(filters);

  return products
    .filter((product) => productMatchesFilters(product, filters, maxPrice))
    .sort(compareByName);
}
