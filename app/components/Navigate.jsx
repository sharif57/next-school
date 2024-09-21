/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import { BiArrowToRight } from "react-icons/bi";

const Navigate = () => {
    return <div className="mt-[130px] px-8 text-black">
        <div className="w-1/2 mx-auto text-center space-y-4 ">
            <p className="btn btn-outline text-black font-semibold">Explore More</p>
            <h1 className="text-5xl  font-bold">Navigate through our Pages</h1>
            <p>Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-14 text-black">

            <div className="flex text-center flex-col  bg-white shadow-sm border-2 border-black rounded-lg  hover:shadow-2xl border-b-8 border-r-8  p-6">
                <div className="p-4">
                    <h5 className="mb-2 text-slate-800 text-3xl font-semibold">
                        About Us
                    </h5>
                    <div className="border-collapse border-2 border-[#ffbe99] space-y-4 mb-4"></div>
                    <p className="text-slate-600 leading-normal font-light">
                        Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.
                    </p>

                    <Link href={'/about'} 
                        className="rounded-md border-2 flex text-xl items-center justify-center w-full bg-[#ffdecc] py-2 px-4 mt-6 border-black  text-center gap-4 text-black transition-all shadow-md   hover:shadow-2xl hover:border-b-8 hover:border-r-8 hover:border-black "
                        type="button"
                    >
                        Learn More <BiArrowToRight className="size-8"></BiArrowToRight>
                    </Link>
                </div>
            </div>
            <div className="flex text-center flex-col  bg-white shadow-sm border-2 border-black rounded-lg  hover:shadow-2xl border-b-8 border-r-8  p-6">
                <div className="p-4">
                    <h5 className="mb-2 text-slate-800 text-3xl font-semibold">
                        Academics                    </h5>
                    <div className="border-collapse border-2 border-[#ffbe99] space-y-4 mb-4"></div>
                    <p className="text-slate-600 leading-normal font-light">
                        Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.
                    </p>

                    <Link href={'/academics'}
                        className="rounded-md border-2 flex text-xl items-center justify-center w-full bg-[#ffdecc] py-2 px-4 mt-6 border-black  text-center gap-4 text-black transition-all shadow-md   hover:shadow-2xl hover:border-b-8 hover:border-r-8 hover:border-black "
                        type="button"
                    >
                        Learn More <BiArrowToRight className="size-8"></BiArrowToRight>
                    </Link>
                </div>
            </div>

            <div className="flex text-center flex-col  bg-white shadow-sm border-2 border-black rounded-lg  hover:shadow-2xl border-b-8 border-r-8  p-6">
                <div className="p-4">
                    <h5 className="mb-2 text-slate-800 text-3xl font-semibold">
                        Student Life                    </h5>
                    <div className="border-collapse border-2 border-[#ffbe99] space-y-4 mb-4"></div>
                    <p className="text-slate-600 leading-normal font-light">
                        Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.
                    </p>

                    <Link href={'/studentLife'}
                        className="rounded-md border-2 flex text-xl items-center justify-center w-full bg-[#ffdecc] py-2 px-4 mt-6 border-black  text-center gap-4 text-black transition-all shadow-md   hover:shadow-2xl hover:border-b-8 hover:border-r-8 hover:border-black "
                        type="button"
                    >
                        Learn More <BiArrowToRight className="size-8"></BiArrowToRight>
                    </Link>
                </div>
            </div>

            <div className="flex text-center flex-col  bg-white shadow-sm border-2 border-black rounded-lg  hover:shadow-2xl border-b-8 border-r-8  p-6">
                <div className="p-4">
                    <h5 className="mb-2 text-slate-800 text-3xl font-semibold">
                        Admissions                    </h5>
                    <div className="border-collapse border-2 border-[#ffbe99] space-y-4 mb-4"></div>
                    <p className="text-slate-600 leading-normal font-light">
                        Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces. 
                    </p>

                    <Link  href={'/Admissions'} 
                        className="rounded-md border-2 flex text-xl items-center justify-center w-full bg-[#ffdecc] py-2 px-4 mt-6 border-black  text-center gap-4 text-black transition-all shadow-md   hover:shadow-2xl hover:border-b-8 hover:border-r-8 hover:border-black "
                        type="button">
                        Learn More <BiArrowToRight className="size-8"></BiArrowToRight>
                    </Link>
                </div>
            </div>

        </div>

    </div>;
};
export default Navigate; 