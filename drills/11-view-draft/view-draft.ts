export type User = {
  id: string;
  isLoggedIn: boolean;
};

export type Doc = {
  authorId: string;
};

export function canViewDraft(user: User | null, doc: Doc | null) {
  if (!user) {
    return false;
  }
  if (!user.isLoggedIn) {
    return false;
  }
  if (!doc) {
    return false;
  }

  return doc.authorId === user.id;
}
