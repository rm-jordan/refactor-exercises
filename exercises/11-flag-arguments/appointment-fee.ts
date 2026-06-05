export function bookAppointment(
  date: Date,
  isUrgent: boolean,
  sendEmail: boolean,
  isVirtual: boolean,
): number {
  const appointment = { date, isUrgent, sendEmail, isVirtual };

  let fee = 50;

  if (appointment.isUrgent) {
    fee += 30;
  }

  if (appointment.isVirtual) {
    fee -= 10;
  }

  if (appointment.sendEmail) {
    console.log(
      `Sending confirmation for ${appointment.date.toISOString()}`,
    );
  }

  return fee;
}
