"use client";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import "./globals.css";
import { useState } from "react";
import { ApiDataContext } from "./context/context";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "thapabishal portfolio",
  description: "Developed by bishal thapa",
  keywords: ["Developer", "Portfolio", "Developer Portfolio", "bishal thapa"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userApiData, setUserApiData] = useState<number | undefined>();

  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className}dark:dark:bg-slate-950 `}>
        <ApiDataContext.Provider value={{ userApiData, setUserApiData }}>
          <Navbar />
          {children}
          <Footer />
        </ApiDataContext.Provider>
      </body>
    </html>
  );
}
