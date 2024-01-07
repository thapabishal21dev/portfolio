"use client";
import Introduction from "./components/introduction/introduction";
import Technology from "./technology/page";
import AboutUs from "./about/about";
import Github from "./components/github/github";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div>
      <div className="">
        <Introduction />
        <AboutUs intro={``} subIntro={``} image={""} heading="" emojHand="" />
        <Github />
        <Technology />
      </div>
    </div>
  );
}
