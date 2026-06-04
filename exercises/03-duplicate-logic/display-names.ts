export type User = {
  firstName?: string;
  lastName?: string;
};

function getDisplayName(user: User): string {
  if (!user.firstName || !user.lastName) {
    return "Unknown User";
  }

  return `${user.firstName} ${user.lastName}`;
}

export function getAdminDisplayName(user: User): string {
  return getDisplayName(user);
}

export function getCustomerDisplayName(user: User): string {
  return getDisplayName(user);
}
