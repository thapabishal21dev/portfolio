import Introduction from "./components/introduction/introduction";
import Technology from "./technology/page";
import AboutUs from "./about/about";
export default function Home() {
  return (
    <div className=" flex justify-center relative ">
      <div>
        <Introduction />
        <AboutUs intro={``} subIntro={``} image={""} heading="AboutMe" />
        <Technology />
      </div>
    </div>
  );
}
