export function hasContent(text: string | null | undefined) {
  if (!text) {
    return false
  }
    if (text.trim().length > 0) {
      return true;
    }

  return false;
}

