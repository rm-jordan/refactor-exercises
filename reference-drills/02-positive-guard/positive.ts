export function isPositive(value: number | null | undefined) {
  if (value) {
    if (value > 0) {
      return true;
    }
  }

  return false;
}
