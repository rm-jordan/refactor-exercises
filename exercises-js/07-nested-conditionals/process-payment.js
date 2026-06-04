export function processPayment(payment) {
  if (payment) {
    if (payment.active) {
      if (payment.amount > 0) {
        return true;
      }
    }
  }

  return false;
}
