import AcademicsBanner from "../components/AcademicsBanner";
import Specail from "../components/Specail";
import Student from "../components/Student";
import Testimonials from "../components/Testimonials";
import Gellary from "../components/Gellary";
import Library from "../components/Library";
import Science from "../components/Science";
import Computer from "../components/Computer";
import Garden from "../components/Garden";

const Academics = () => {
    return <div className="mb-10">
        <AcademicsBanner></AcademicsBanner>
        <Specail></Specail>
        <Student></Student>
        <Testimonials></Testimonials>
        <Gellary></Gellary>
        <Library></Library>
        <Science></Science>
        <Computer></Computer>
        <Garden></Garden>
    </div>;
};
export default Academics;