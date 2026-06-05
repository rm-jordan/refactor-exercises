export function canDeleteComment(user: any, comment: any) {
  if (user) {
    if (user.isLoggedIn) {
      if (comment) {
        if (comment.authorId === user.id || user.role === "admin") {
          return true;
        }
      }
    }
  }

  return false;
}
