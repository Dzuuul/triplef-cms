"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

const geistSans = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

const useStore = create(
  persist(
    (set) => ({
      darkMode: false,
      toggleDarkMode: () =>
        set((state: { darkMode: boolean }) => ({ darkMode: !state.darkMode })),
    }),
    {
      name: "dark-mode", // name of the item in localStorage
      storage: typeof window !== "undefined" ? localStorage : undefined, // Use storage instead of getStorage
    } as PersistOptions<{ darkMode: boolean }, { darkMode: boolean }>
  )
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { darkMode } = useStore();

  return (
    <html lang="en" className={darkMode ? "dark" : ""}>
      <body className={`${nunito.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
