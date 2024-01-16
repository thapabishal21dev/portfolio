import React from "react";
import Introduction from "../components/introduction/introduction";
import HomePageAbout from "../components/shortaboutus/shortabout";
import Github from "../components/github/github";

const HomePage = () => {
  return (
    <div>
      <Introduction />
      <HomePageAbout />
      <Github />
    </div>
  );
};

export default HomePage;
