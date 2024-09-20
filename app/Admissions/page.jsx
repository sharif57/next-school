import AdmissionCard from "../components/AdmissionCard";
import Table from "../components/Table";

/* eslint-disable react/no-unescaped-entities */
const Page = () => {
    return <div className="text-black">
        <div className=" pt-10 ">
            <div
                className=" bg-no-repeat h-44 py-60 bg-white border-2 border-black rounded-lg  shadow-2xl border-b-8 border-r-8 "
                style={{ backgroundImage: `url('https://i.ibb.co.com/NjJWg6j/Abstract-Design.png')` }}
            >
                <div className="flex items-center justify-between gap-20 pl-36 pt-">
                    <div>
                        <p className="btn btn-outline text-black hover:bg-[#ffefd5]">Admission</p>
                        <h1 className="text-5xl font-semibold mt-3 text-black">Join Our Family of Young Learners</h1>
                    </div>
                    <div className="w-1/2 text-black">
                        <p>At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-[130px] px-8">
            <div className="w-1/2 mx-auto text-center space-y-4 ">
                <p className="btn btn-outline text-black hover:bg-[#ffefd5]">Process</p>
                <h1 className="text-5xl  font-bold">Admission Process</h1>
                <p>Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school</p>
            </div>
        </div>
        <div className="px-12">
            <AdmissionCard></AdmissionCard>
            <Table></Table>
        </div>
    </div>;
};
export default Page;