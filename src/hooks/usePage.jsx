import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
const data = (set) => ({
  page: 0,
  increment: () => set((state) => ({ page: Math.min(state.page + 1, 18) })),
  decrement: () => set((state) => ({ page: Math.max(state.page - 1, 0) })),
  reset: () => set({ page: 0 }),
});
const storage = {};
storage.name = "page";
storage.storage = createJSONStorage(() => localStorage);
const usePage = create(persist(data, storage));
export default usePage;
