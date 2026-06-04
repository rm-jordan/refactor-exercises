import { afterEach, describe, expect, it, vi } from "vitest";
import { processOrder } from "./process-order.js";

describe("processOrder", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("throws when customerEmail is missing", () => {
    expect(() =>
      processOrder({
        customerEmail: "",
        items: [{ price: 10, quantity: 1 }],
      }),
    ).toThrow("Missing email");
  });

  it("calculates subtotal from item price and quantity", () => {
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    const total = processOrder({
      customerEmail: "ada@example.com",
      customerType: "regular",
      items: [
        { price: 10, quantity: 2 },
        { price: 5, quantity: 1 },
      ],
    });

    expect(total).toBe(25);
    expect(logSpy).toHaveBeenCalledWith(
      "Customer ada@example.com placed order for 25",
    );
  });

  it("applies 15% VIP discount to subtotal", () => {
    vi.spyOn(console, "log").mockImplementation(() => {});

    const total = processOrder({
      customerEmail: "vip@example.com",
      customerType: "VIP",
      items: [{ price: 100, quantity: 1 }],
    });

    expect(total).toBe(85);
  });

  it("does not apply discount for non-VIP customer types", () => {
    vi.spyOn(console, "log").mockImplementation(() => {});

    const total = processOrder({
      customerEmail: "user@example.com",
      customerType: "member",
      items: [{ price: 100, quantity: 1 }],
    });

    expect(total).toBe(100);
  });

  it("logs customer email and computed total", () => {
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    processOrder({
      customerEmail: "log@example.com",
      customerType: "VIP",
      items: [{ price: 200, quantity: 1 }],
    });

    expect(logSpy).toHaveBeenCalledOnce();
    expect(logSpy).toHaveBeenCalledWith(
      "Customer log@example.com placed order for 170",
    );
  });

  it("returns zero for an order with no items", () => {
    vi.spyOn(console, "log").mockImplementation(() => {});

    expect(
      processOrder({
        customerEmail: "empty@example.com",
        customerType: "VIP",
        items: [],
      }),
    ).toBe(0);
  });
});
