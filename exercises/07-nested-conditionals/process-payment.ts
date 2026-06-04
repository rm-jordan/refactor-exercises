export function processPayment(payment: any) {
  if (payment) {
    if (payment.active) {
      if (payment.amount > 0) {
        return true;
      }
    }
  }

  return false;
}
