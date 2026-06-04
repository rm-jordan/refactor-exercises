import { describe, expect, it } from "vitest";
import { getActiveUsers } from "./active-users.js";

describe("getActiveUsers", () => {
  it("returns only users where active is strictly true", () => {
    const active = { id: 1, active: true };
    const inactive = { id: 2, active: false };
    const missingFlag = { id: 3 };
    const truthyString = { id: 4, active: "true" };

    const result = getActiveUsers([active, inactive, missingFlag, truthyString]);

    expect(result).toEqual([active]);
  });

  it("returns empty array when no users are active", () => {
    expect(getActiveUsers([{ active: false }, { active: 0 }])).toEqual([]);
  });

  it("returns empty array for empty input", () => {
    expect(getActiveUsers([])).toEqual([]);
  });

  it("returns all users when every user is active", () => {
    const users = [
      { id: "a", active: true },
      { id: "b", active: true },
    ];
    expect(getActiveUsers(users)).toEqual(users);
  });

  it("preserves order of active users", () => {
    const second = { id: 2, active: true };
    const first = { id: 1, active: true };
    expect(
      getActiveUsers([{ active: false }, second, { active: false }, first]),
    ).toEqual([second, first]);
  });

  it("returns the same object references from the input array", () => {
    const user = { id: 1, active: true };
    const result = getActiveUsers([user]);
    expect(result[0]).toBe(user);
  });
});
