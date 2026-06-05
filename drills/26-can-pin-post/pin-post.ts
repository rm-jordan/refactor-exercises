export function canPinPost(user: any, post: any) {
  if (user) {
    if (user.isLoggedIn) {
      if (post) {
        if (user.role === "admin" || post.authorId === user.id) {
          return true;
        }
      }
    }
  }

  return false;
}
