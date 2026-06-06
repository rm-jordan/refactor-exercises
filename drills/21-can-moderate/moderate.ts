export type User = {
  isLoggedIn: boolean;
  role: string;
};

export function canModerate(user: User | null) {
  if (!user) {
    return false;
  }
  if (!user.isLoggedIn) {
    return false;
  }

  return user.role === "moderator" || user.role === "admin";
}
