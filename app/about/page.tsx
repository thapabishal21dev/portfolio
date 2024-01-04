"use client";
import AboutUs from "./about";

interface IpropsIntro {
  intro: string;
  subIntro: string;
  image: any;
  heading: string;
  emojHand: string;
}

const About = (props: IpropsIntro) => {
  return (
    <>
      <AboutUs
        intro="Hey,I'm Bishal Thapa!"
        subIntro="Frontend Software Developer from Kathmandu,Nepal"
        image={"/nepalflag.svg"}
        heading=""
        emojHand="👋"
      />
    </>
  );
};

export default About;
