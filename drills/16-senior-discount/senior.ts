const MIN_SENIOR_AGE = 65

export function qualifiesForSeniorDiscount(age: number) {
  return age >= MIN_SENIOR_AGE;
}
