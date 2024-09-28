import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Information = () => {
    return <div className="mt-[130px] lg:px-8 text-black">
        {/* Header Section */}
        <div className="lg:w-1/2 mx-auto text-center space-y-4">
            <p className="btn btn-outline text-black font-semibold">Contact Form</p>
            <h1 className="text-3xl lg:text-5xl font-bold">Student Information</h1>
            <p>
                If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below. Kindly provide the following details to help us better understand your needs.
            </p>
        </div>

        {/* Social Media Icons */}
        <div className="text-2xl font-bold text-center relative -mb-6 mt-10">
            <div className="flex justify-center gap-4 lg:gap-8">
                <FaFacebook className="size-10 lg:size-14 border-2 border-black p-2 bg-[#ffdecc] rounded-lg" />
                <FaXTwitter className="size-10 lg:size-14 border-2 border-black p-2 bg-[#ffdecc] rounded-lg" />
                <FaLinkedin className="size-10 lg:size-14 border-2 border-black p-2 bg-[#ffdecc] rounded-lg" />
            </div>
        </div>

        {/* Form Container */}
        <div className="mx-4 lg:mx-14 p-6 lg:px-16 bg-white shadow-md rounded-lg border-2 border-r-8 border-b-8 border-black">
            <form className="mt-10">
                {/* First Row (Parent Name, Email) */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                    <div className="mb-4 w-full">
                        <label className="block text-gray-700 font-medium mb-2">Parent Name</label>
                        <input
                            type="text"
                            name="parentName"
                            placeholder="Enter parent name"
                            className="w-full p-2 border-2 border-black rounded-md bg-[#fffcfa]"
                            required
                        />
                    </div>
                    <div className="mb-4 w-full">
                        <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter email address"
                            className="w-full p-2 border-2 border-black rounded-md bg-[#fffcfa]"
                            required
                        />
                    </div>
                </div>

                {/* Second Row (Phone Number, Student Name) */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                    <div className="mb-4 w-full">
                        <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Enter phone number"
                            className="w-full p-2 border-2 border-black rounded-md bg-[#fffcfa]"
                            required
                        />
                    </div>
                    <div className="mb-4 w-full">
                        <label className="block text-gray-700 font-medium mb-2">Student Name</label>
                        <input
                            type="text"
                            name="studentName"
                            placeholder="Enter student name"
                            className="w-full p-2 border-2 border-black rounded-md bg-[#fffcfa]"
                            required
                        />
                    </div>
                </div>

                {/* Third Row (Student Age, Program of Interest) */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                    <div className="mb-4 w-full">
                        <label className="block text-gray-700 font-medium mb-2">Student Age</label>
                        <input
                            type="number"
                            name="studentAge"
                            placeholder="Enter student age"
                            className="w-full p-2 border-2 border-black rounded-md bg-[#fffcfa]"
                            required
                        />
                    </div>
                    <div className="mb-4 w-full">
                        <label className="block text-gray-700 font-medium mb-2">Program of Interest</label>
                        <input
                            type="text"
                            name="programOfInterest"
                            placeholder="Enter program of interest"
                            className="w-full p-2 border-2 border-black rounded-md bg-[#fffcfa]"
                            required
                        />
                    </div>
                </div>

                {/* Message Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea
                        name="message"
                        placeholder="Enter your message"
                        className="w-full p-2 border-2 border-black rounded-md bg-[#fffcfa]"
                        rows="4"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Submit
                </button>
            </form>
        </div>
    </div>
        ;
};
export default Information;