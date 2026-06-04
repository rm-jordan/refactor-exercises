export function bookAppointment(
  date: Date,
  isUrgent: boolean,
  sendEmail: boolean,
  isVirtual: boolean,
) {
  let fee = 50;

  if (isUrgent) {
    fee += 30;
  }

  if (isVirtual) {
    fee -= 10;
  }

  if (sendEmail) {
    console.log(`Sending confirmation for ${date.toISOString()}`);
  }

  return fee;
}
