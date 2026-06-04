export const database = {
  save(user: Record<string, unknown>) {
    return { ...user, id: "saved-id" };
  },
};
