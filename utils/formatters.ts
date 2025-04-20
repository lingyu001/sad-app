/**
 * Format a number as currency
 * @param value Number to format
 * @param currency Currency code (default: USD)
 * @returns Formatted currency string
 */
export function formatCurrency(value: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}

/**
 * Format a number as percentage
 * @param value Number to format (0.1 = 10%)
 * @param decimals Number of decimal places (default: 2)
 * @returns Formatted percentage string
 */
export function formatPercentage(value: number, decimals: number = 2): string {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(value);
}

/**
 * Format a large number with abbreviations (K, M, B, T)
 * @param value Number to format
 * @returns Formatted string with abbreviation
 */
export function formatLargeNumber(value: number): string {
  if (value >= 1e12) {
    return `${(value / 1e12).toFixed(2)}T`;
  } else if (value >= 1e9) {
    return `${(value / 1e9).toFixed(2)}B`;
  } else if (value >= 1e6) {
    return `${(value / 1e6).toFixed(2)}M`;
  } else if (value >= 1e3) {
    return `${(value / 1e3).toFixed(2)}K`;
  }
  return value.toString();
}

/**
 * Format a date string
 * @param dateString Date string or Date object
 * @param format Format style (default: 'medium')
 * @returns Formatted date string
 */
export function formatDate(
  dateString: string | Date,
  format: 'short' | 'medium' | 'long' = 'medium'
): string {
  const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
  
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: format === 'short' ? 'numeric' : format === 'medium' ? 'short' : 'long',
    day: 'numeric'
  };
  
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

/**
 * Add plus sign to positive numbers
 * @param value Number to format
 * @param decimals Number of decimal places (default: 2)
 * @returns Formatted number string with sign
 */
export function formatWithSign(value: number, decimals: number = 2): string {
  const fixed = value.toFixed(decimals);
  return value > 0 ? `+${fixed}` : fixed;
} 