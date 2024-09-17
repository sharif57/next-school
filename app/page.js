import Banner from "./components/Banner";
import Benefits from "./components/Benefits";
import Frequently from "./components/Frequently";
import Leading from "./components/Leading";
import Navigate from "./components/Navigate";
import Test from "./components/Test";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <Benefits></Benefits>
      {/* <Test></Test> */}
      <Frequently></Frequently>
      <Navigate></Navigate>
      <Leading></Leading>
    </div>
  );
}
