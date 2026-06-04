import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { UserCard } from "./UserCard.js";

describe("UserCard", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders active user name", () => {
    render(
      <UserCard
        user={{
          firstName: "Ada",
          lastName: "Lovelace",
          active: true,
          email: "ada@lab.com",
        }}
        showEmail={false}
        showBadge={false}
      />,
    );
    expect(screen.getByRole("heading")).toHaveTextContent("Ada Lovelace");
  });

  it("shows email when showEmail is true", () => {
    render(
      <UserCard
        user={{
          firstName: "Ada",
          lastName: "Lovelace",
          active: true,
          email: "ada@lab.com",
        }}
        showEmail={true}
        showBadge={false}
      />,
    );
    expect(screen.getByTestId("email")).toHaveTextContent("ada@lab.com");
  });

  it("hides email when showEmail is false", () => {
    render(
      <UserCard
        user={{
          firstName: "Ada",
          lastName: "Lovelace",
          active: true,
          email: "ada@lab.com",
        }}
        showEmail={false}
        showBadge={false}
      />,
    );
    expect(screen.queryByTestId("email")).toBeNull();
  });

  it("shows VIP badge when showBadge is true", () => {
    render(
      <UserCard
        user={{
          firstName: "Ada",
          lastName: "Lovelace",
          active: true,
          email: "ada@lab.com",
        }}
        showEmail={false}
        showBadge={true}
      />,
    );
    expect(screen.getByTestId("badge")).toHaveTextContent("VIP");
  });

  it("renders inactive message", () => {
    render(
      <UserCard
        user={{
          firstName: "Ada",
          lastName: "Lovelace",
          active: false,
          email: "ada@lab.com",
        }}
        showEmail={true}
        showBadge={true}
      />,
    );
    expect(screen.getByTestId("inactive")).toHaveTextContent("Inactive user");
    expect(screen.queryByRole("heading", { level: 2 })).toBeNull();
  });

  it("renders empty state when no user", () => {
    render(<UserCard user={null} showEmail={false} showBadge={false} />);
    expect(screen.getByTestId("empty")).toHaveTextContent("No user");
  });
});
