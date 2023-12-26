import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import StarsCanvas from "./components/main/backgroundStars";

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
    <html lang="en">
      <body className={`${inter.className} overflow-y-scroll overflow-x-hidden`}>
        <Navbar />
        {children}
        <StarsCanvas/>
        <Footer />
      </body>
    </html>
  );
}


{/* <body className={`${inter.className} overflow-y-scroll overflow-x-hidden bg-cover bg-[url('/looper.png')] bg-no-repeat`}> */}