import { afterEach, describe, expect, it, vi } from "vitest";
import { bookAppointment } from "./appointment-fee.js";

const date = new Date("2024-06-01T10:00:00.000Z");

describe("bookAppointment", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("base fee with no flags", () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    expect(bookAppointment(date, false, false, false)).toBe(50);
  });

  it("urgent adds 30", () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    expect(bookAppointment(date, true, false, false)).toBe(80);
  });

  it("virtual subtracts 10", () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    expect(bookAppointment(date, false, false, true)).toBe(40);
  });

  it("urgent and virtual stack", () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    expect(bookAppointment(date, true, false, true)).toBe(70);
  });

  it("logs when sendEmail is true", () => {
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    bookAppointment(date, false, true, false);
    expect(logSpy).toHaveBeenCalledWith(
      "Sending confirmation for 2024-06-01T10:00:00.000Z",
    );
  });
});
