export function isPositive(value: number | null | undefined) {
 if (!value) {
  return false
 }
 if (value > 0) {
  return true
 }
  return false;
}
