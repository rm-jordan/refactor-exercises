export function canViewDraft(user: any, doc: any) {
  if (user) {
    if (user.isLoggedIn) {
      if (doc) {
        if (doc.authorId === user.id) {
          return true;
        }
      }
    }
  }

  return false;
}
