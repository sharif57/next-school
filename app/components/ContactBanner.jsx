import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";


/* eslint-disable react/no-unescaped-entities */
const ContactBanner = () => {
    return <div>
        <div className="pt-10">
            <div
                className="bg-no-repeat h-auto py-10 lg:py-32 bg-white border-2 border-black rounded-lg shadow-2xl border-b-8 border-r-8"
                style={{ backgroundImage: `url('https://i.ibb.co/NjJWg6j/Abstract-Design.png')` }}
            >
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 p-6 lg:pl-28 mt-20 lg:mt-0">
                    {/* Contact Us Text Section */}
                    <div className="text-center lg:text-left">
                        <p className="btn btn-outline font-semibold text-black">Contact Us</p>
                        <h1 className="text-xl lg:text-4xl font-semibold mt-3 text-black">
                            Feel Free To Connect With Us
                        </h1>
                    </div>

                    {/* Contact Info Section */}
                    <div className="w-full lg:w-3/5 text-black">
                        <p className="text-center lg:text-left">
                            We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods.
                        </p>

                        {/* Contact Details */}
                        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center mt-5">
                            {/* Left Side (Email & Phone) */}
                            <div className="w-full lg:w-1/2">
                                <div className="flex items-center gap-3 border-2 border-black p-4 mb-3 rounded-lg">
                                    <MdMarkEmailRead className="size-11 p-2 bg-[#fff5f0] rounded-lg border-2 border-black" />
                                    <h1 className="font-semibold">sharif@gmail.com</h1>
                                </div>
                                <div className="flex items-center gap-3 border-2 border-black p-4 mb-3 rounded-lg">
                                    <FaPhoneAlt className="size-11 p-2 bg-[#fff5f0] rounded-lg border-2 border-black" />
                                    <h1 className="font-semibold">01611198984</h1>
                                </div>
                            </div>

                            {/* Right Side (Address & Office Hours) */}
                            <div className="w-full lg:w-1/2">
                                <div className="flex items-center gap-3 border-2 border-black p-4 mb-3 rounded-lg">
                                    <FaLocationDot className="size-11 p-2 bg-[#fff5f0] rounded-lg border-2 border-black" />
                                    <h1 className="font-semibold">Mirzapur, Tangail, Dhaka, Bangladesh</h1>
                                </div>
                                <div className="flex items-center gap-3 border-2 border-black p-4 mb-3 rounded-lg">
                                    <IoIosTimer className="size-11 p-2 bg-[#fff5f0] rounded-lg border-2 border-black" />
                                    <h1 className="font-semibold">Office Hours - 9am - 6pm</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>;
};
export default ContactBanner;