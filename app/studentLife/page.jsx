
import Event from "../components/Event";
import Extracurricular from "../components/Extracurricular";
import StudentBanner from "../components/StudentBanner";

const Page = () => {
  return <div className="mb-10">
    <StudentBanner></StudentBanner>
    <Extracurricular></Extracurricular>
    <Event></Event>
  </div>;
};
export default Page;