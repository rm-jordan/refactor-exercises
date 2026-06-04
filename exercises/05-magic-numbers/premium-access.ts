const MIN_AGE = 18
const SENIOR_AGE = 65

export function canAccessPremiumContent(age: number) {
  return age >= MIN_AGE;
}

export function applySeniorDiscount(age: number) {
  return age >= SENIOR_AGE;
}
