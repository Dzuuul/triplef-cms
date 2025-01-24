// app/store/darkModeStore.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { useEffect } from "react";

interface DarkModeState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  initializeDarkMode: () => void;
}

export const useDarkModeStore = create<DarkModeState>()(
  persist(
    (set) => ({
      isDarkMode: false,
      toggleDarkMode: () =>
        set((state) => {
          const newMode = !state.isDarkMode;
          updateDarkModeClass(newMode);
          return { isDarkMode: newMode };
        }),
      initializeDarkMode: () => {
        const storedMode = localStorage.getItem("dark-mode-storage");
        const initialMode = storedMode
          ? JSON.parse(storedMode).state.isDarkMode
          : window.matchMedia("(prefers-color-scheme: dark)").matches;

        updateDarkModeClass(initialMode);
        set({ isDarkMode: initialMode });
      },
    }),
    {
      name: "dark-mode-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

// Separate function to update dark mode class
function updateDarkModeClass(isDark: boolean) {
  const root = document.documentElement;
  if (isDark) {
    root.classList.add("dark");
    root.classList.remove("light");
  } else {
    root.classList.remove("dark");
    root.classList.add("light");
  }
}

// Hook to initialize dark mode on client side
export function useDarkModeInitializer() {
  const { initializeDarkMode } = useDarkModeStore();

  useEffect(() => {
    initializeDarkMode();
  }, [initializeDarkMode]);
}
