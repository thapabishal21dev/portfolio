"use client";
import AboutUs from "./about";

interface IpropsIntro {
  intro: string;
  subIntro: string;
  image: any;
}

const About = (props: IpropsIntro) => {
  return (
    <>
      <AboutUs
        intro="Hey,I'm Bishal Thapa!"
        subIntro="Frontend Software Developer from Kathmandu,Nepal"
        image={"/nepalflag.svg"}
        heading=""
      />
    </>
  );
};

export default About;
