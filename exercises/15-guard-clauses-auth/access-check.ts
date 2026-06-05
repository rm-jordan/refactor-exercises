export type User = {
  isLoggedIn: boolean;
  role: string;
}


export function canAccessAdminPanel(user: User) {
  if (!user) {  
    return false;
  }
  if (!user.isLoggedIn) {
    return false;
  }
  if (user.role === "admin" || user.role === "owner") {
    return true;
  }
  return false;
}
