export function getParkingFee(hours: number) {
  if (hours <= 1) {
    return 3;
  }
  if (hours <= 4) {
    return 8;
  }

  return 15;
}
