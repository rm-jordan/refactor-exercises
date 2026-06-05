export function canAccessAdminPanel(user: any) {
  if (user) {
    if (user.isLoggedIn) {
      if (user.role === "admin" || user.role === "owner") {
        return true;
      }
    }
  }

  return false;
}
