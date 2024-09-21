import AcademicsBanner from "../components/AcademicsBanner";
import Garden from "../components/Garden";
import Gellary from "../components/Gellary";
import Library from "../components/Library";
import Science from "../components/Science";
import Specail from "../components/Specail";
import Student from "../components/Student";
import Testimonials from "../components/Testimonials";
import Computer from "../components/Computer";

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