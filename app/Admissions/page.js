import AdmissionCard from "../components/AdmissionCard";
import Tables from "../components/Tables";


/* eslint-disable react/no-unescaped-entities */
const Page = () => {
    return <div className="text-black">
        <div className=" pt-10 ">
            
            <div
                className=" bg-no-repeat lg:h-44  lg:py-60     bg-white border-2 border-black rounded-lg  shadow-2xl border-b-8 border-r-8 "
                style={{ backgroundImage: `url('https://i.ibb.co/NjJWg6j/Abstract-Design.png')` }}
            >
                <div className="lg:flex lg:mt-0  mt-52 lg:p-0 p-4 items-center justify-between lg:gap-20 lg:pl-36 ">
                    <div>
                        <p className="btn btn-outline text-black font-semibold">Admission</p>
                        <h1 className="lg:text-5xl text-2xl font-semibold mt-3">Join Our Family of Young Learners</h1>
                    </div>
                    <div className="lg:w-1/2">
                    <p>At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-[130px] lg:px-8">
            <div className="lg:w-1/2 mx-auto text-center space-y-4 ">
                <p className="btn btn-outline text-black hover:bg-[#ffefd5]">Process</p>
                <h1 className="lg:text-5xl text-3xl  font-bold">Admission Process</h1>
                <p>Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school</p>
            </div>
        </div>
        <div className="lg:px-12">
            <AdmissionCard></AdmissionCard>
            <Tables></Tables>
        </div>
    </div>;
};
export default Page;