import { BsLightningChargeFill } from "react-icons/bs";
import { FaMusic } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { GiCampCookingPot } from "react-icons/gi";
import { ImClubs } from "react-icons/im";
import { MdScience } from "react-icons/md";


const Extracurricular = () => {
    return <div>
        <div className="mt-[130px] lg:px-8 text-black">
            <div className="lg:w-1/2 mx-auto text-center space-y-4 ">
                <p className="btn btn-outline text-black font-semibold">Our Features</p>
                <h1 className="lg:text-5xl text-3xl font-bold">Extracurricular Activities</h1>
                <p>At Little Learners Academy, we believe in nurturing well-rounded individuals. Our extracurricular activities offer a diverse range of experiences that complement our academic curriculum and encourage students to explore their interests and passions. We offer a wide array of extracurricular activities, including</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 mt-14 gap-10">
                <div className="border-2 border-black rounded-lg py-8 px-4 relative shadow-xl hover:shadow-2xl border-b-8 border-r-8 ">
                    <BsLightningChargeFill className="size-14 bg-[#ffdecc] rounded-lg p-2 border-2 border-black absolute -mt-14" />
                    <h1 className="text-2xl font-semibold mb-3 pt-5">Sports and Athletics</h1>
                    <p>Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline.</p>
                </div>
                <div className="border-2 border-black rounded-lg py-8 px-4 relative shadow-xl hover:shadow-2xl border-b-8 border-r-8">
                    <FaPencil className="size-14 bg-[#ffdecc] rounded-lg p-2 border-2 border-black absolute -mt-14" />
                    <h1 className="text-2xl font-semibold mb-3 pt-5">Art and Creativity</h1>
                    <p>Our art classes and creative workshops provide a platform for students to express their creativity through painting, drawing, and other artistic forms.</p>
                </div>
                <div className="border-2 border-black rounded-lg py-8 px-4 relative shadow-xl hover:shadow-2xl border-b-8 border-r-8">
                    <FaMusic className="size-14 bg-[#ffdecc] rounded-lg p-2 border-2 border-black absolute -mt-14" />
                    <h1 className="text-2xl font-semibold mb-3 pt-5">Music and Performing Arts</h1>
                    <p>Students can discover their musical talents through singing, playing musical instruments, and participating in drama and theater performances.</p>
                </div>
                <div className="border-2 border-black rounded-lg py-8 px-4 relative shadow-xl hover:shadow-2xl border-b-8 border-r-8">
                    <ImClubs className="size-14 bg-[#ffdecc] rounded-lg p-2 border-2 border-black absolute -mt-14" />
                    <h1 className="text-2xl font-semibold mb-3 pt-5">Language Clubs</h1>
                    <p>Language clubs offer an opportunity for students to immerse themselves in different languages and cultures, fostering global awareness.</p>
                </div>
                <div className="border-2 border-black rounded-lg py-8 px-4 relative shadow-xl hover:shadow-2xl border-b-8 border-r-8">
                    <MdScience className="size-14 bg-[#ffdecc] rounded-lg p-2 border-2 border-black absolute -mt-14" />
                    <h1 className="text-2xl font-semibold mb-3 pt-5">Science Club</h1>
                    <p>The science club allows young scientists to explore the wonders of science through fun experiments and hands-on learning.</p>
                </div>
                <div className="border-2 border-black rounded-lg py-8 px-4 relative shadow-xl hover:shadow-2xl border-b-8 border-r-8">
                    <GiCampCookingPot className="size-14 bg-[#ffdecc] rounded-lg p-2 border-2 border-black absolute -mt-14" />
                    <h1 className="text-2xl font-semibold mb-3 pt-5">Cooking and Culinary Arts</h1>
                    <p>Cooking classes introduce students to the joys of preparing and tasting delicious and healthy meals.</p>
                </div>

            </div>
        </div>
    </div>;
};
export default Extracurricular;