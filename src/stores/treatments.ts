import { defineStore } from "pinia";
import type { Treatment } from "@/types/treatment";

export const useTreatmentsStore = defineStore("treatments", {
  state: () => ({
    treatments: [
      {
        treatmentId: "limelight",
        name: "Limelight",
        shortDescription:
          "A non-invasive approach to skin rejuvenation that treats pigmentation, redness, and telangiectasia. Limelight can significantly improve skin texture associated with sun damage and aging.",
        category: "laser",
        treatmentAreas: ["face", "neck", "chest", "hands", "arms"],
        targetResults: [
          "sun damage",
          "pigmentation",
          "age spots",
          "skin tone",
          "redness reduction",
        ],
        status: "active",
        images: [
          {
            purpose: "overview",
            imageKey: "limelight/overview",
          },
          {
            purpose: "procedure",
            imageKey: "limelight/procedure-main",
          },
          {
            purpose: "beforeAfter",
            imageKey: "limelight/before-after-primary",
          },
        ],
        services: [
          {
            serviceId: "limelight-face",
            description: "Face",
            targetAreas: ["face"],
            type: "session",
            price: 3900,
            currency: "ZAR",
          },
          {
            serviceId: "limelight-face-neck",
            description: "Face and Neck",
            targetAreas: ["face", "neck"],
            type: "session",
            price: 5500,
            currency: "ZAR",
          },
          {
            serviceId: "limelight-chest",
            description: "Chest",
            targetAreas: ["chest"],
            type: "session",
            price: 3900,
            currency: "ZAR",
          },
          {
            serviceId: "limelight-face-neck-chest",
            description: "Face, Neck and Chest",
            targetAreas: ["face", "neck", "chest"],
            type: "session",
            price: 7500,
            currency: "ZAR",
          },
          {
            serviceId: "limelight-hands",
            description: "Hands",
            targetAreas: ["hands"],
            type: "session",
            price: 1500,
            currency: "ZAR",
          },
          {
            serviceId: "limelight-neck",
            description: "Neck",
            targetAreas: ["neck"],
            type: "session",
            price: 1600,
            currency: "ZAR",
          },
          {
            serviceId: "limelight-forearms",
            description: "Forearms",
            targetAreas: ["arms"],
            type: "session",
            price: 3000,
            currency: "ZAR",
          },
          {
            serviceId: "limelight-full-arms",
            description: "Full Arms",
            targetAreas: ["arms"],
            type: "session",
            price: 5000,
            currency: "ZAR",
          },
        ],
      },
      {
        treatmentId: "laser-hair-removal",
        name: "Laser Hair Removal",
        shortDescription:
          "The Prowave hair removal system delivers a specially tailored light source for permanent hair reduction. Cutera's innovative hair removal technology provides effective treatment for a wide range of skin types.",
        category: "laser",
        treatmentAreas: ["legs", "face", "bikini", "underarms", "back"],
        targetResults: ["hair removal", "permanent hair reduction", "smooth skin"],
        status: "active",
        images: [
          {
            purpose: "overview",
            imageKey: "hair-removal/overview",
          },
        ],
        services: [
          {
            serviceId: "hair-removal-full-leg",
            description: "Full Leg",
            targetAreas: ["legs"],
            type: "session",
            price: 5000,
            currency: "ZAR",
          },
          {
            serviceId: "hair-removal-half-leg",
            description: "Half Leg",
            targetAreas: ["legs"],
            type: "session",
            price: 3000,
            currency: "ZAR",
          },
          {
            serviceId: "hair-removal-bikini",
            description: "Bikini",
            targetAreas: ["bikini"],
            type: "variable",
            priceRangeMin: 650,
            priceRangeMax: 1100,
            currency: "ZAR",
          },
          {
            serviceId: "hair-removal-underarm",
            description: "Underarm",
            targetAreas: ["underarms"],
            type: "session",
            price: 500,
            currency: "ZAR",
          },
          {
            serviceId: "hair-removal-lip",
            description: "Lip",
            targetAreas: ["face"],
            type: "session",
            price: 350,
            currency: "ZAR",
          },
          {
            serviceId: "hair-removal-lip-chin",
            description: "Lip and Chin",
            targetAreas: ["face"],
            type: "session",
            price: 500,
            currency: "ZAR",
          },
          {
            serviceId: "hair-removal-full-face",
            description: "Full Face",
            targetAreas: ["face"],
            type: "session",
            price: 1000,
            currency: "ZAR",
          },
          {
            serviceId: "hair-removal-full-back",
            description: "Full Back",
            targetAreas: ["back"],
            type: "session",
            price: 3500,
            currency: "ZAR",
          },
        ],
      },
    ] as Treatment[],
    loading: false,
    error: null as string | null,
  }),

  getters: {
    getAllTreatments: (state) => state.treatments,
    getTreatmentById: (state) => (treatmentId: string) =>
      state.treatments.find((treatment) => treatment.treatmentId === treatmentId),
  },

  actions: {
    async fetchTreatments() {
      this.loading = true;
      this.error = null;
      try {
        // For now, we're using the hardcoded data in state
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay
      } catch (error) {
        this.error = "Failed to fetch treatments";
        console.error("Error fetching treatments:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
