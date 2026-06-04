export function getAdminDisplayName(user: any) {
  if (!user.firstName || !user.lastName) {
    return "Unknown User";
  }

  return `${user.firstName} ${user.lastName}`;
}

export function getCustomerDisplayName(user: any) {
  if (!user.firstName || !user.lastName) {
    return "Unknown User";
  }

  return `${user.firstName} ${user.lastName}`;
}
