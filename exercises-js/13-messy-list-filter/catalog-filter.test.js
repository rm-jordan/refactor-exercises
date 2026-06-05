import { describe, expect, it } from "vitest";
import { getCatalogProducts } from "./catalog-filter.js";

const sampleProducts = [
  { id: "1", name: "Zebra Mug", category: "home", price: 12, inStock: true },
  { id: "2", name: "Apple Watch", category: "tech", price: 399, inStock: true },
  { id: "3", name: "Basic Tee", category: "apparel", price: 25, inStock: false },
  { id: "4", name: "Desk Lamp", category: "home", price: 45, inStock: true },
  { id: "5", name: "USB Hub", category: "tech", price: 1200, inStock: true },
];

describe("getCatalogProducts", () => {
  it("returns all products sorted by name when no filters", () => {
    const result = getCatalogProducts(sampleProducts, {});
    expect(result.map((p) => p.name)).toEqual([
      "Apple Watch",
      "Basic Tee",
      "Desk Lamp",
      "Zebra Mug",
    ]);
  });

  it("filters by category", () => {
    const result = getCatalogProducts(sampleProducts, { category: "home" });
    expect(result.map((p) => p.name)).toEqual(["Desk Lamp", "Zebra Mug"]);
  });

  it("uses default max price of 1000 when maxPrice is omitted", () => {
    const result = getCatalogProducts(sampleProducts, {});
    expect(result.find((p) => p.id === "5")).toBeUndefined();
  });

  it("respects explicit maxPrice", () => {
    const result = getCatalogProducts(sampleProducts, { maxPrice: 50 });
    expect(result.map((p) => p.name)).toEqual(["Basic Tee", "Desk Lamp", "Zebra Mug"]);
  });

  it("filters to in-stock items only", () => {
    const result = getCatalogProducts(sampleProducts, { inStockOnly: true });
    expect(result.every((p) => p.inStock)).toBe(true);
    expect(result.map((p) => p.name)).toEqual([
      "Apple Watch",
      "Desk Lamp",
      "Zebra Mug",
    ]);
  });

  it("combines filters", () => {
    const result = getCatalogProducts(sampleProducts, {
      category: "tech",
      maxPrice: 500,
      inStockOnly: true,
    });
    expect(result).toEqual([
      { id: "2", name: "Apple Watch", category: "tech", price: 399, inStock: true },
    ]);
  });
});
