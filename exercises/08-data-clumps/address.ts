export function createShippingLabel(
  street: string,
  city: string,
  province: string,
  postalCode: string,
) {
  return `${street}, ${city}, ${province}, ${postalCode}`;
}

export function validateAddress(
  street: string,
  city: string,
  province: string,
  postalCode: string,
) {
  return (
    street.length > 0 &&
    city.length > 0 &&
    province.length > 0 &&
    postalCode.length > 0
  );
}
