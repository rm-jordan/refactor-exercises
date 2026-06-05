export function hasContent(text: string | null | undefined) {
  if (text) {
    if (text.trim().length > 0) {
      return true;
    }
  }

  return false;
}
