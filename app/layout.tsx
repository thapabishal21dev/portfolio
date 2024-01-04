import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "thapabishal portfolio",
  description: "Developed by bishal thapa",
  keywords: ["Developer", "Portfolio", "Developer Portflio", "bishal thapa"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className}  `}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
