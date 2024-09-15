/* eslint-disable react/no-unescaped-entities */

import { BsPower } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";
import { ImPower } from "react-icons/im";

const Awards = () => {
    return <div>
        <div className="mt-[130px] px-8 text-black">
            <div className="w-1/2 mx-auto text-center space-y-4 ">
                <p className="btn btn-outline text-black font-semibold">Our Achievements</p>
                <h1 className="text-5xl  font-bold">Our Awards and Recognitions</h1>
                <p>Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 mt-14 gap-10">
                <div className="border-2 border-black rounded-lg py-8 bg-white px-4  relative shadow-2xl border-b-8 border-r-8 ">
                    <BsPower className="size-14 bg-[#ffdecc] rounded-lg p-2 border-2 border-black absolute -mt-14" />
                    <h1 className="text-2xl font-semibold mb-3 pt-5">Innovative STEAM Education Award</h1>
                    <p>Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.</p>
                </div>
                <div className="border-2 border-black rounded-lg py-8 px-4 relative bg-white shadow-2xl border-b-8 border-r-8 ">
                    <GiNetworkBars className="size-14 bg-[#ffdecc] rounded-lg p-2 border-2 border-black absolute -mt-14" />
                    <h1 className="text-2xl font-semibold mb-3 pt-5">Innovative STEAM Education Award</h1>
                    <p>Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.</p>
                </div>
                <div className="border-2 border-black rounded-lg py-8 px-4 relative bg-white shadow-2xl border-b-8 border-r-8">
                    <ImPower className="size-14 bg-[#ffdecc] rounded-lg p-2 border-2 border-black absolute -mt-14" />
                    <h1 className="text-2xl font-semibold mb-3 pt-5">Environmental Stewardship Award</h1>
                    <p>Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.</p>
                </div>
            </div>
        </div>;
    </div>;
};
export default Awards;