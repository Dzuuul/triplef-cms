// app/store/darkModeStore.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface DarkModeState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const useDarkModeStore = create<DarkModeState>()(
  persist(
    (set) => ({
      isDarkMode: false,
      toggleDarkMode: () =>
        set((state) => {
          const newMode = !state.isDarkMode;

          // Update html class for dark mode
          if (newMode) {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }

          return { isDarkMode: newMode };
        }),
    }),
    {
      name: "dark-mode-storage", // name of the item in localStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
);
