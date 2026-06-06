const SHORT_STAY = 1;
const MEDIUM_STAY = 4;

const LOW_FEE = 3;
const MEDIUM_FEE = 8;
const HIGH_FEE = 15;

export function getParkingFee(hours: number) {
  if (hours <= SHORT_STAY) {
    return LOW_FEE;
  }
  if (hours <= MEDIUM_STAY) {
    return MEDIUM_FEE;
  }

  return HIGH_FEE;
}
