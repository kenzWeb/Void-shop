const DEFAULT_CURRENCY = "USD";
const DEFAULT_LOCALE = "en-US";

export function formatPrice(
  price: number,
  currency: string = DEFAULT_CURRENCY
): string {
  return new Intl.NumberFormat(DEFAULT_LOCALE, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }).format(price);
}

export function formatPriceWithDecimals(
  price: number,
  currency: string = DEFAULT_CURRENCY
): string {
  return new Intl.NumberFormat(DEFAULT_LOCALE, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(price);
}

export function calculateDiscountPercentage(
  originalPrice: number,
  currentPrice: number
): number {
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
}
