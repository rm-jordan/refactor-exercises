export type User = {
  id: string;
  isLoggedIn: boolean;
  role: string;
}
export type Post = {
  authorId: string;
}

export function canPinPost(user: User | null, post: Post | null) {
  if (!user) return false;
  if (!user.isLoggedIn) return false;
  if (!post) return false;

  return user.role === "admin" || post.authorId === user.id;
}

