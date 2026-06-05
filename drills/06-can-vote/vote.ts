export type User = {
  isLoggedIn: boolean;
  age: number;
};

export function canVote(user: User | null) {
  if (!user) {
    return false;
  }
  if (!user.isLoggedIn) {
    return false;
  }

  return user.age >= 18;
}
