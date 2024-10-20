import { FaBookOpen, FaPenFancy, FaRegStar, FaSignLanguage } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { GiNetworkBars } from "react-icons/gi";

const Specail = () => {
    return <div>
        <div className="mt-[130px] lg:px-8 text-black">
            <div className="lg:w-1/2 mx-auto text-center space-y-4 ">
                <p className="btn btn-outline text-black font-semibold">Our Features</p>
                <h1 className="lg:text-5xl text-3xl  font-bold">Our Special Features</h1>
                <p>Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
            </div>
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-3 mt-14 gap-10">
                    <div className="border-2 border-black rounded-lg py-8 bg-white px-4  relative shadow-2xl border-b-8 border-r-8 ">
                        <FaBookOpen className="size-14 bg-[#ffdecc] rounded-lg p-2 border-2 border-black absolute -mt-14" />
                        <h1 className="text-2xl font-semibold mb-3 pt-5"></h1>
                        <p>Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.</p>
                    </div>
                    <div className="border-2 border-black rounded-lg py-8 px-4 relative bg-white shadow-2xl border-b-8 border-r-8 ">
                        <GiNetworkBars className="size-14 bg-[#ffdecc] rounded-lg p-2 border-2 border-black absolute -mt-14" />
                        <h1 className="text-2xl font-semibold mb-3 pt-5">STEAM Education</h1>
                        <p>We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.</p>
                    </div>
                    <div className="border-2 border-black rounded-lg py-8 px-4 relative bg-white shadow-2xl border-b-8 border-r-8">
                        <FaSignLanguage className="size-14 bg-[#ffdecc] rounded-lg p-2 border-2 border-black absolute -mt-14" />
                        <h1 className="text-2xl font-semibold mb-3 pt-5">Language Immersion</h1>
                        <p>Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.</p>
                    </div>
                    <div className="border-2 border-black rounded-lg py-8 px-4 relative bg-white shadow-2xl border-b-8 border-r-8">
                        <FaPenFancy className="size-14 bg-[#ffdecc] rounded-lg p-2 border-2 border-black absolute -mt-14" />
                        <h1 className="text-2xl font-semibold mb-3 pt-5">Art and Creativity</h1>
                        <p>Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms..</p>
                    </div>
                    <div className="border-2 border-black rounded-lg py-8 px-4 relative bg-white shadow-2xl border-b-8 border-r-8">
                        <FiSun className="size-14 bg-[#ffdecc] rounded-lg p-2 border-2 border-black absolute -mt-14" />
                        <h1 className="text-2xl font-semibold mb-3 pt-5">Outdoor Education</h1>
                        <p>Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.</p>
                    </div>
                    <div className="border-2 border-black rounded-lg py-8 px-4 relative bg-white shadow-2xl border-b-8 border-r-8">
                        <FaRegStar className="size-14 bg-[#ffdecc] rounded-lg p-2 border-2 border-black absolute -mt-14" />
                        <h1 className="text-2xl font-semibold mb-3 pt-5">Play-Based Learning</h1>
                        <p>Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};
export default Specail;