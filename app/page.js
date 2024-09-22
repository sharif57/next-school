import Apply from "./components/Apply";
import Banner from "./components/Banner";
import Benefits from "./components/Benefits";
import Discover from "./components/Discover";
import Frequently from "./components/Frequently";
import Leading from "./components/Leading";

import Navigate from "./components/Navigate";
import Stories from "./components/Stories";
import Test from "./components/Test";

export default function Home() {
  return (
    <div className="mb-10">
      <Banner></Banner>
      <Stories></Stories>
      <Benefits></Benefits>
      <Discover></Discover>
      <Apply></Apply>
      <Test></Test>
      <Frequently></Frequently>
      <Navigate></Navigate>
      <Leading></Leading>
      
    </div>
  );
}
