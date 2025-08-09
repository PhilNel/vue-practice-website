import { defineStore } from "pinia";
import type { Special } from "@/types/special";

export const useSpecialsStore = defineStore("specials", {
  state: () => ({
    specials: [
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
