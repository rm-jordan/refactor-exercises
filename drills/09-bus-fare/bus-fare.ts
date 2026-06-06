const CHILD_MAX_AGE = 12;        // free when age < this
const SENIOR_MIN_AGE = 65;

const FREE_FARE = 0;
const SENIOR_FARE = 1;
const STANDARD_FARE = 2;

export function getBusFare(age: number) {
  if (age < CHILD_MAX_AGE) {
    return FREE_FARE;
  }
  if (age >= SENIOR_MIN_AGE) {
    return SENIOR_FARE;
  }
  return STANDARD_FARE;
}