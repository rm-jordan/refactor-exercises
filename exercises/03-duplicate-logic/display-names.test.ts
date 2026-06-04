import { describe, expect, it } from "vitest";
import {
  getAdminDisplayName,
  getCustomerDisplayName,
} from "./display-names.js";

const cases = [
  {
    label: "full name",
    user: { firstName: "Ada", lastName: "Lovelace" },
    expected: "Ada Lovelace",
  },
  {
    label: "missing firstName",
    user: { lastName: "Lovelace" },
    expected: "Unknown User",
  },
  {
    label: "missing lastName",
    user: { firstName: "Ada" },
    expected: "Unknown User",
  },
  {
    label: "empty firstName",
    user: { firstName: "", lastName: "Lovelace" },
    expected: "Unknown User",
  },
  {
    label: "empty lastName",
    user: { firstName: "Ada", lastName: "" },
    expected: "Unknown User",
  },
  {
    label: "both names missing",
    user: {},
    expected: "Unknown User",
  },
] as const;

describe.each([
  ["getAdminDisplayName", getAdminDisplayName],
  ["getCustomerDisplayName", getCustomerDisplayName],
] as const)("%s", (_name, fn) => {
  it.each(cases)("$label → $expected", ({ user, expected }) => {
    expect(fn(user)).toBe(expected);
  });
});

describe("getAdminDisplayName and getCustomerDisplayName", () => {
  it("behave the same for the same user input", () => {
    const users = [
      { firstName: "Grace", lastName: "Hopper" },
      { firstName: "", lastName: "Hopper" },
      {},
    ];

    for (const user of users) {
      expect(getAdminDisplayName(user)).toBe(getCustomerDisplayName(user));
    }
  });
});
