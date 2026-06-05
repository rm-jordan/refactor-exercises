export function getBusFare(age: number) {
  if (age < 12) {
    return 0;
  }
  if (age >= 65) {
    return 1;
  }

  return 2;
}
