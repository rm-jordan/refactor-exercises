import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { fetchUserProfile } from "./legacy-client.js";

describe("fetchUserProfile", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("returns profile on success", async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      json: async () => ({
        id: "42",
        displayName: "Ada",
        email: "ada@example.com",
      }),
    } as Response);

    await expect(fetchUserProfile("42", "secret-key")).resolves.toEqual({
      id: "42",
      displayName: "Ada",
      email: "ada@example.com",
    });
  });

  it("throws with api error message", async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: false,
      status: 403,
      json: async () => ({ message: "Forbidden" }),
    } as Response);

    await expect(fetchUserProfile("1", "bad")).rejects.toThrow("Forbidden");
  });

  it("throws status when body not json", async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: false,
      status: 500,
      json: async () => {
        throw new Error("not json");
      },
    } as unknown as Response);

    await expect(fetchUserProfile("1", "k")).rejects.toThrow(
      "Request failed with status 500",
    );
  });
});
