export function getRoleBadgeLabel(role: string) {
  if (role === "admin") {
    return "Admin";
  } else if (role === "moderator") {
    return "Moderator";
  } else if (role === "member") {
    return "Member";
  } else if (role === "guest") {
    return "Guest";
  }

  return "Unknown";
}
