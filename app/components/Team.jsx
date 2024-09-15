/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { MdEmail } from "react-icons/md";

const Team = () => {
    return <div>
        <div className="mt-[130px] px-8 pb-16 text-black">
            <div className="w-1/2 mx-auto text-center space-y-4 ">
                <p className="btn btn-outline text-black font-semibold">Our Teachers With Experties</p>
                <h1 className="text-5xl  font-bold">Our Team Members</h1>
                <p>At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 mt-16 gap-10 px-16">
                <div className="bg-white p-8  border-2 border-black border-b-8 border-r-8 rounded-lg">
                    <div className="flex items-center justify-between gap-4" >
                        <div className="flex items-center justify-between gap-3 ">
                            <Image height={16} width={16} className=" border-2 size-16 border-black rounded-lg " src="https://i.ibb.co/WGdWyx1/20240502162307521-jpeg-removebg-preview.png" alt="" />
                            <h1 className="text-3xl font-semibold">Sharif Mahamud</h1>
                        </div>
                        <MdEmail className="size-14 bg-[#fff5f0] p-3 rounded-lg border-2 border-black"></MdEmail>
                    </div>
                    <div className="p-5 bg-[#fff5f0] mt-4 rounded-lg border-2 border-black">
                        <h1 className="text-xl font-semibold mb-3">Qualification:Bachelor's Degree in Early Childhood Education</h1>
                        <p>Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.</p>
                    </div>
                </div>
                <div className="bg-white p-8  border-2 border-black border-b-8 border-r-8 rounded-lg">
                    <div className="flex items-center justify-between gap-4" >
                        <div className="flex items-center justify-between gap-3 ">
                            <Image height={16} width={16} className=" border-2 size-16 border-black rounded-lg bg-[#fff5f0]" src="https://i.ibb.co/NxXWxSm/fun-3d-illustration-fun-superhero.jpg" alt="" />
                            <h1 className="text-3xl font-semibold">Lemon Sikder</h1>
                        </div>
                        <MdEmail className="size-14 bg-[#fff5f0] p-3 rounded-lg border-2 border-black"></MdEmail>
                    </div>
                    <div className="p-5 bg-[#fff5f0] mt-4 rounded-lg border-2 border-black">
                        <h1 className="text-xl font-semibold mb-3">Qualification: Master's Degree in Elementary Education</h1>
                        <p>With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically.</p>
                    </div>
                </div>
                <div className="bg-white p-8  border-2 border-black border-b-8 border-r-8 rounded-lg">
                    <div className="flex items-center justify-between gap-4" >
                        <div className="flex items-center justify-between gap-3 ">
                            <Image height={16} width={16} className=" border-2 size-16 border-black rounded-lg bg-[#fff5f0]" src="https://i.ibb.co/ZH4dZx2/graffiti-screaming-boy-3.jpg" alt="" />
                            <h1 className="text-3xl font-semibold">Jowel Rana</h1>
                        </div>
                        <MdEmail className="size-14 bg-[#fff5f0] p-3 rounded-lg border-2 border-black"></MdEmail>
                    </div>
                    <div className="p-5 bg-[#fff5f0] mt-4 rounded-lg border-2 border-black">
                        <h1 className="text-xl font-semibold mb-3">Qualification: Diploma in Child Psychology</h1>
                        <p>Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students.</p>
                    </div>
                </div>
                <div className="bg-white p-8  border-2 border-black border-b-8 border-r-8 rounded-lg">
                    <div className="flex items-center justify-between gap-4" >
                        <div className="flex items-center justify-between gap-3 ">
                            <Image height={16} width={16} className="size-16  border-2 border-black rounded-lg bg-[#fff5f0]" src="https://i.ibb.co/L9R4Pfg/bohemian-man-with-his-arms-crossed.jpg" alt="" />
                            <h1 className="text-3xl font-semibold">Tarine Akter</h1>
                        </div>
                        <MdEmail className="size-14 bg-[#fff5f0] p-3 rounded-lg border-2 border-black"></MdEmail>
                    </div>
                    <div className="p-5 bg-[#fff5f0] mt-4 rounded-lg border-2 border-black">
                        <h1 className="text-xl font-semibold mb-3">Qualification: Bachelor's Degree in Physical Education</h1>
                        <p>Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle.</p>
                    </div>
                </div>
                <div className="bg-white p-8  border-2 border-black border-b-8 border-r-8 rounded-lg">
                    <div className="flex items-center justify-between gap-4" >
                        <div className="flex items-center justify-between gap-3 ">
                            <Image height={16} width={16} className=" border-2 size-16 border-black rounded-lg bg-[#fff5f0]" src="https://i.ibb.co/thNvxhc/young-bearded-man-with-striped-shirt.jpg" alt="" />
                            <h1 className="text-3xl font-semibold">Ms. Jessica Lee</h1>
                        </div>
                        <MdEmail className="size-14 bg-[#fff5f0] p-3 rounded-lg border-2 border-black"></MdEmail>
                    </div>
                    <div className="p-5 bg-[#fff5f0] mt-4 rounded-lg border-2 border-black">
                        <h1 className="text-xl font-semibold mb-3">Qualification: Master's Degree in Special Education</h1>
                        <p>Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential.</p>
                    </div>
                </div>
                <div className="bg-white p-8  border-2 border-black border-b-8 border-r-8 rounded-lg">
                    <div className="flex items-center justify-between gap-4" >
                        <div className="flex items-center justify-between gap-3 ">
                            <Image height={16} width={16} className=" border-2 size-16 border-black rounded-lg bg-[#fff5f0]" src="https://i.ibb.co/HdDyTdx/smiling-female-face-with-grunge-watercolor-effect-1.jpg" alt="" />
                            <h1 className="text-3xl font-semibold">Mr. William Parker</h1>
                        </div>
                        <MdEmail className="size-14 bg-[#fff5f0] p-3 rounded-lg border-2 border-black"></MdEmail>
                    </div>
                    <div className="p-5 bg-[#fff5f0] mt-4 rounded-lg border-2 border-black">
                        <h1 className="text-xl font-semibold mb-3"> Qualification: Bachelor's Degree in Fine Arts</h1>
                        <p>Mr. William's background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>;
};
export default Team;