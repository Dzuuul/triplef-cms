"use client";

import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import {
  useDarkModeStore,
  useDarkModeInitializer,
} from "./store/darkModeStore";

const nunito = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useDarkModeInitializer();
  const { isDarkMode } = useDarkModeStore();

  return (
    <html lang="en" className={isDarkMode ? "dark" : "light"}>
      <body className={`${nunito.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
