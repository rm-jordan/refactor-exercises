export type User = Record<string, unknown> & {
  active?: unknown;
};

export function getActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.active === true);
}
