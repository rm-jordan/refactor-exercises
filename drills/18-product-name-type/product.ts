export type Product = {
  name: string;
}

export function getProductTitle(product: Product) {
  return product.name.toUpperCase();
}
