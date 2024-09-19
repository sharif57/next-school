import Apply from "./components/Apply";
import Banner from "./components/Banner";
import Benefits from "./components/Benefits";
import Discover from "./components/Discover";
import Frequently from "./components/Frequently";
import Gellary from "./components/Gellary";
import Leading from "./components/Leading";
import Library from "./components/Library";
import Navigate from "./components/Navigate";
import Science from "./components/Science";
import Stories from "./components/Stories";
import Test from "./components/Test";
import Computer from "./components/Computer";
import Garden from "./components/Garden";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <Stories></Stories>
      <Benefits></Benefits>
      <Discover></Discover>
      <Apply></Apply>
      <Test></Test>
      <Frequently></Frequently>
      <Navigate></Navigate>
      {/* <Leading></Leading> */}
      <Gellary></Gellary>
      <Library></Library>
      <Science></Science>
      <Computer></Computer>
      <Garden></Garden>
    </div>
  );
}
