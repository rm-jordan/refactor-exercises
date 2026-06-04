export function calculateDiscount(customer: any) {
  if (customer.yearsAsCustomer >= 5) {
    return 0.15;
  }

  return 0;
}
