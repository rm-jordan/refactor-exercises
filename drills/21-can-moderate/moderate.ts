export function canModerate(user: any) {
  if (user) {
    if (user.isLoggedIn) {
      if (user.role === "moderator" || user.role === "admin") {
        return true;
      }
    }
  }

  return false;
}
