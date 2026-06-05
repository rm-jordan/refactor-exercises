export function canEditPost(user: any, post: any) {
  if (user) {
    if (user.isLoggedIn) {
      if (post) {
        if (post.authorId === user.id || user.role === "moderator") {
          return true;
        }
      }
    }
  }

  return false;
}
