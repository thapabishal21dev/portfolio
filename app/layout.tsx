"use client";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import "./globals.css";
import { useState } from "react";
import { ApiDataContext } from "./context/context";
interface IThemeType {
  colorScheme: "light" | "dark";
}

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "bishalthapa",
  description: "Developed by bishal thapa",
  keywords: ["Developer", "Portfolio", "Developer Portfolio", "bishal thapa"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [updateTheme, setUpdateTheme] = useState<IThemeType>({
    colorScheme: "dark",
  });
  const [userApiData, setUserApiData] = useState<string | undefined>();

  return (
    <html lang="en" className="dark scroll-smooth ">
      <body className={`${inter.className}  dark:bg-slate-950 `}>
        <div className="">
          <ApiDataContext.Provider
            value={{
              userApiData,
              updateTheme,
              setUserApiData,
              setUpdateTheme,
            }}
          >
            <Navbar />
            {children}
            <Footer />
          </ApiDataContext.Provider>
        </div>
      </body>
    </html>
  );
}
