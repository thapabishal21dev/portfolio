import Introduction from "./components/introduction/introduction";
import Technology from "./technology/page";
import AboutUs from "./about/about";
import Github from "./components/github/github";
export default function Home() {
  return (
    <div className=" flex justify-center  ">
      <div>
        <Introduction />
        <AboutUs intro={``} subIntro={``} image={""} heading="" emojHand="" />
        <Github />
        <Technology />
      </div>
    </div>
  );
}
