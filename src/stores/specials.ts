import { defineStore } from "pinia";
import type { Special } from "@/types/special";

export const useSpecialsStore = defineStore("specials", {
  state: () => ({
    specials: [
      {
        id: 1,
        title: "UNDER 30'S TREATMENT",
        shortDescription: "Peel and Light therapy in 30 minutes",
        fullDescription:
          "<strong>Chemical Peel Benefits:</strong> Restores a radiant complexion, improves fine lines and wrinkles, evens skin tone, brightens a dull complexion, improves skin texture and smoothness, regulates oily skin and dilated pores.\n\n<strong>Omnilux Red Light Therapy:</strong> Uses specific wavelengths to stimulate deeper skin layers, increasing collagen production speed and efficiency. Effectively treats acne, promotes skin rejuvenation, and accelerates wound healing.",
        price: 650,
        originalPrice: 850,
        percentageSavings: 23,
        currency: "R",
      },
    ] as Special[],
    loading: false,
    error: null as string | null,
  }),

  getters: {
    getAllSpecials: (state) => state.specials,
    getSpecialById: (state) => (id: number) => state.specials.find((special) => special.id === id),
  },

  actions: {
    async fetchSpecials() {
      this.loading = true;
      this.error = null;
      try {
        // For now, we're using the hardcoded data in state
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay
      } catch (error) {
        this.error = "Failed to fetch specials";
        console.error("Error fetching specials:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
