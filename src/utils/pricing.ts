import type { Treatment, TreatmentService } from "@/types/treatment";

/**
 * Formats a number as currency with spaces for thousands
 * @param amount - The amount to format
 * @param currency - The currency code (default: 'R')
 * @returns Formatted currency string (e.g., "R1 500")
 */
export function formatCurrency(amount: number, currency: string = "R"): string {
  return `${currency}${amount.toLocaleString("en-ZA").replace(/,/g, " ")}`;
}

/**
 * Gets all prices from a treatment's services, handling different service types
 * @param services - Array of treatment services
 * @returns Array of all price values
 */
function getAllPrices(services: TreatmentService[]): number[] {
  const prices: number[] = [];

  services.forEach((service) => {
    if (service.type === "variable") {
      // Variable services have priceRangeMin and priceRangeMax
      const variableService = service as TreatmentService & {
        priceRangeMin: number;
        priceRangeMax: number;
      };
      if (variableService.priceRangeMin) prices.push(variableService.priceRangeMin);
      if (variableService.priceRangeMax) prices.push(variableService.priceRangeMax);
    } else if (service.price) {
      // Session and per-unit services have a single price
      prices.push(service.price);
    }
  });

  return prices;
}

/**
 * Calculates and formats price display text for treatment overview cards
 * @param treatment - Treatment object with services array
 * @returns Formatted price string for display
 */
export function calculatePriceDisplay(treatment: Treatment): string {
  if (!treatment.services || treatment.services.length === 0) {
    return "Price on consultation";
  }

  const prices = getAllPrices(treatment.services);
  if (prices.length === 0) {
    return "Price on consultation";
  }

  const hasPerUnitServices = treatment.services.some((service) => service.type === "per-unit");
  if (hasPerUnitServices) {
    const minPrice = Math.min(...prices);
    return `From ${formatCurrency(minPrice)} per unit`;
  }

  const uniquePrices = [...new Set(prices)].sort((a, b) => a - b);
  if (uniquePrices.length === 1) {
    return formatCurrency(uniquePrices[0]);
  } else {
    // Price range
    const minPrice = uniquePrices[0];
    const maxPrice = uniquePrices[uniquePrices.length - 1];
    return `${formatCurrency(minPrice)} - ${formatCurrency(maxPrice)}`;
  }
}
