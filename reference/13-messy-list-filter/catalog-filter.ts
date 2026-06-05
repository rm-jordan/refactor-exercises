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

export function getCatalogProducts(
  products: Product[],
  filters: CatalogFilters,
): Product[] {
  const max = filters.maxPrice !== undefined ? filters.maxPrice : 1000;
  const result: Product[] = [];

  for (let i = 0; i < products.length; i++) {
    const p = products[i]!;
    if (filters.category !== undefined) {
      if (p.category !== filters.category) {
        continue;
      }
    }
    if (p.price > max) {
      continue;
    }
    if (filters.inStockOnly === true) {
      if (!p.inStock) {
        continue;
      }
    }
    result.push(p);
  }

  for (let i = 0; i < result.length; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[i]!.name > result[j]!.name) {
        const temp = result[i]!;
        result[i] = result[j]!;
        result[j] = temp;
      }
    }
  }

  return result;
}
