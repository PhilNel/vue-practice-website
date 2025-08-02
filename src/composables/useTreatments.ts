import { computed } from "vue";
import { useTreatmentsStore } from "@/stores/treatments";

export function useTreatments() {
  const store = useTreatmentsStore();

  const treatments = computed(() => store.getAllTreatments);
  const loading = computed(() => store.loading);
  const error = computed(() => store.error);

  const fetchTreatments = () => store.fetchTreatments();
  const getTreatmentById = (treatmentId: string) => store.getTreatmentById(treatmentId);

  return {
    treatments,
    loading,
    error,
    fetchTreatments,
    getTreatmentById,
  };
}
