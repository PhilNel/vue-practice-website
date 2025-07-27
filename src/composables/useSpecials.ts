import { computed } from "vue";
import { useSpecialsStore } from "@/stores/specials";

export function useSpecials() {
  const store = useSpecialsStore();

  const specials = computed(() => store.getAllSpecials);
  const loading = computed(() => store.loading);
  const error = computed(() => store.error);

  const fetchSpecials = () => store.fetchSpecials();
  const getSpecialById = (id: number) => store.getSpecialById(id);

  return {
    specials,
    loading,
    error,
    fetchSpecials,
    getSpecialById,
  };
}
