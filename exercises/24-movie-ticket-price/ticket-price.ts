export function getMovieTicketPrice(age: number) {
  if (age < 13) {
    return 8;
  } else if (age < 65) {
    return 14;
  } else {
    return 10;
  }
}
