// need to create a user type and a post type

export type User = {
  isLoggedIn: boolean;
  id: string;
  role: string;
};

export type Post = {
  authorId: string;
};

export function canEditPost(user: User | null, post: Post | null) {
  if (!user) {
    return false;
  }
  if (!user.isLoggedIn) {
    return false;
  }
  if (!post) {
    return false;
  }

  return post.authorId === user.id || user.role === "moderator";
}
