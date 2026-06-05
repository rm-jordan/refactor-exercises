export function canViewProfile(viewer: any, profile: any) {
  if (viewer) {
    if (viewer.isLoggedIn) {
      if (profile) {
        if (profile.isPublic || profile.ownerId === viewer.id) {
          return true;
        }
      }
    }
  }

  return false;
}
