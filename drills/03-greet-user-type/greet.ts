export type User = {
  name: String
}

export function greet(user: any) {
  return `Hello, ${user.name}`;
}
