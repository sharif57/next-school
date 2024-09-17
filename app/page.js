import Banner from "./components/Banner";
import Benefits from "./components/Benefits";
import Frequently from "./components/Frequently";
import Test from "./components/Test";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <Benefits></Benefits>
      {/* <Test></Test> */}
      <Frequently></Frequently>
    </div>
  );
}
