// Step 1: Group the clump — four fields that always appear together.
export type Address = {
  street: string;
  city: string;
  province: string;
  postalCode: string;
};

// Step 2: Build an Address from separate args (tests call exports with four strings).
function toAddress(
  street: string,
  city: string,
  province: string,
  postalCode: string,
): Address {
  return { street, city, province, postalCode };
}

// Step 3: Core logic takes Address — no repeated parameter lists.
function formatShippingLabel(address: Address): string {
  return `${address.street}, ${address.city}, ${address.province}, ${address.postalCode}`;
}

function isValidAddress(address: Address): boolean {
  return (
    address.street.length > 0 &&
    address.city.length > 0 &&
    address.province.length > 0 &&
    address.postalCode.length > 0
  );
}

// Step 4: Keep public exports; bundle args → Address → helper.
export function createShippingLabel(
  street: string,
  city: string,
  province: string,
  postalCode: string,
): string {
  return formatShippingLabel(toAddress(street, city, province, postalCode));
}

export function validateAddress(
  street: string,
  city: string,
  province: string,
  postalCode: string,
): boolean {
  return isValidAddress(toAddress(street, city, province, postalCode));
}
