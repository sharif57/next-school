/* eslint-disable react/no-unescaped-entities */
import { FaFlag, FaGraduationCap } from "react-icons/fa";
import { FaExplosion, FaPeoplePulling } from "react-icons/fa6";
import { MdMasks } from "react-icons/md";
import { TbWorldBolt } from "react-icons/tb";

const Benefits = () => {
    return <div>
        <div className="mt-[130px] lg:px-8 text-black">
            <div className="lg:w-1/2 mx-auto text-center space-y-4 ">
                <p className="btn btn-outline text-black font-semibold">Children Deserve Bright Future</p>
                <h1 className="lg:text-5xl text-4xl  font-bold">Our Benefits</h1>
                <p>With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 mt-14 gap-10">
                <div className="border-2 border-black rounded-lg py-8 px-4 relative shadow-xl hover:shadow-2xl border-b-8 border-r-8 ">
                    <FaGraduationCap className="size-14 bg-[#ffdecc] rounded-lg p-2 border-2 border-black absolute -mt-14" />
                    <h1 className="text-2xl font-semibold mb-3 pt-5">Holistic Learning Approach</h1>
                    <p>Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.</p>
                </div>
                <div className="border-2 border-black rounded-lg py-8 px-4 relative shadow-xl hover:shadow-2xl border-b-8 border-r-8">
                    <FaExplosion className="size-14 bg-[#ffdecc] rounded-lg p-2 border-2 border-black absolute -mt-14" />
                    <h1 className="text-2xl font-semibold mb-3 pt-5">Experienced Educators</h1>
                    <p>Our passionate and qualified teachers create a supportive and stimulating learning environment.</p>
                </div>
                <div className="border-2 border-black rounded-lg py-8 px-4 relative shadow-xl hover:shadow-2xl border-b-8 border-r-8">
                    <MdMasks className="size-14 bg-[#ffdecc] rounded-lg p-2 border-2 border-black absolute -mt-14" />
                    <h1 className="text-2xl font-semibold mb-3 pt-5">Nurturing Environment</h1>
                    <p>We prioritize safety and provide a warm and caring atmosphere for every child.</p>
                </div>
                <div className="border-2 border-black rounded-lg py-8 px-4 relative shadow-xl hover:shadow-2xl border-b-8 border-r-8">
                    <FaFlag className="size-14 bg-[#ffdecc] rounded-lg p-2 border-2 border-black absolute -mt-14" />
                    <h1 className="text-2xl font-semibold mb-3 pt-5">Play-Based Learning</h1>
                    <p>We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
                </div>
                <div className="border-2 border-black rounded-lg py-8 px-4 relative shadow-xl hover:shadow-2xl border-b-8 border-r-8">
                    <TbWorldBolt className="size-14 bg-[#ffdecc] rounded-lg p-2 border-2 border-black absolute -mt-14" />
                    <h1 className="text-2xl font-semibold mb-3 pt-5">Individualized Attention</h1>
                    <p>Our small class sizes enable personalized attention, catering to each child's unique needs.</p>
                </div>
                <div className="border-2 border-black rounded-lg py-8 px-4 relative shadow-xl hover:shadow-2xl border-b-8 border-r-8">
                    <FaPeoplePulling className="size-14 bg-[#ffdecc] rounded-lg p-2 border-2 border-black absolute -mt-14" />
                    <h1 className="text-2xl font-semibold mb-3 pt-5">Parent Involvement</h1>
                    <p>We foster a strong parent-school partnership to ensure seamless communication and collaboration.</p>
                </div>

            </div>
        </div>
    </div>;
};
export default Benefits;