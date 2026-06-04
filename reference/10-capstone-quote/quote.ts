export function getQuote(customer: any, plan: string, months: number) {
  let total = 0;

  if (months > 0) {
    if (plan === "basic") {
      total = months * 10;
    } else if (plan === "express") {
      total = months * 25;
    } else if (plan === "enterprise") {
      total = months * 50;
    }
  }

  if (customer.yearsActive >= 3) {
    total = total * 0.9;
  }

  if (customer.region === "EU") {
    total = total * 1.2;
  }

  return Math.round(total * 100) / 100;
}
