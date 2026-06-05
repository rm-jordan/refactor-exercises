export function canVote(user: any) {
  if (user) {
    if (user.isLoggedIn) {
      if (user.age >= 18) {
        return true;
      }
    }
  }

  return false;
}
