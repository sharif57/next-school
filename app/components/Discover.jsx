/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

const Discover = () => {
    return <div className="text-black mt-[130px] flex items-center justify-between gap-10 ">
        <div className="space-y-4 w-1/2
">
            <h1 className="text-5xl font-semibold">Discover our School        </h1>
            <p className="">Welcome to Gariabetail High School, where every student’s journey to success begins with a strong foundation. At our school, we’re committed to nurturing young minds and fostering a love for learning in a supportive and inclusive environment.</p>
            <p>State-of-the-Art Facilities: From modern classrooms and laboratories to creative arts and sports facilities, our school is equipped with the resources needed for a well-rounded education.
                Extra-Curricular Activities: We believe in the importance of a balanced education. Our diverse range of extracurricular activities offers students opportunities to explore their interests and develop new skills.
                Community Spirit: We foster a strong sense of community, encouraging students to be active participants in their school environment and beyond.</p>
            <div className="flex items-center justify-between mt-8">
                <div>
                    <h1 className="text-3xl font-semibold">Mrs Joanna McQuaid</h1>
                    <p className="mt-2 font-sans font-medium">Principal</p>
                </div>
                <Image height={800} width={200} className="" src={'/pen.png'}></Image>
            </div>
        </div>
        <div className="flex-1">
            <div className="relative w-full h-[600px]">
                <Image
                    src="/teching.jpg"
                    alt="Teaching"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full rounded-badge"
                />
            </div>        </div>
    </div>;
};
export default Discover;