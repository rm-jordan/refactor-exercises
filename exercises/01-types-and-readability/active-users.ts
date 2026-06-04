export function getActiveUsers(users: any[]) {
  const result = [];

  for (let i = 0; i < users.length; i++) {
    if (users[i].active === true) {
      result.push(users[i]);
    }
  }

  return result;
}
