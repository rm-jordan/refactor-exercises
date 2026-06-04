export function canAccessPremiumContent(age: number) {
  return age >= 18;
}

export function applySeniorDiscount(age: number) {
  return age >= 65;
}
