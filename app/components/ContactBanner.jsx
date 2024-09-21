import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";


/* eslint-disable react/no-unescaped-entities */
const ContactBanner = () => {
    return <div>
        <div className=" pt-10 ">
            <div
                className=" bg-no-repeat h-28 py-80 bg-white border-2 border-black rounded-lg  shadow-2xl border-b-8 border-r-8 "
                style={{ backgroundImage: `url('https://i.ibb.co.com/NjJWg6j/Abstract-Design.png')` }}
            >
                <div className="flex items-center justify-between gap-20 pl-28 p-6">
                    <div>
                        <p className="btn btn-outline  font-semibold text-black">Contact Us</p>
                        <h1 className="text-4xl font-semibold mt-3 text-black">Feel Free To Connect With Us</h1>
                    </div>
                    <div className="w-3/5 text-black">
                        <p>We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods</p>
                        <div className="flex gap-12 items-center justify-center mt-5">
                            <div className="">
                                <div className="flex items-center gap-3 border-2 border-black p-4 mb-3 rounded-lg">
                                    <div>
                                        <MdMarkEmailRead className="size-11 p-2 bg-[#fff5f0] rounded-lg border-2 border-black" />
                                    </div>
                                    <h1 className=" font-semibold"> sharifmahamud577951@gmail.com</h1>
                                </div>
                                <div className="flex items-center mb-3 gap-3 border-2 border-black p-4 rounded-lg">
                                    <div>
                                        <FaPhoneAlt className="size-11 p-2 bg-[#fff5f0] rounded-lg border-2 border-black" />
                                    </div>
                                    <h1 className=" font-semibold"> 01611198984</h1>
                                </div>
                            </div>
                            <div className="">
                                <div className="flex items-center gap-3 border-2 mb-3 border-black p-4 rounded-lg">
                                    <div>
                                        <FaLocationDot className="size-11 p-2 bg-[#fff5f0] rounded-lg border-2 border-black" />
                                    </div>
                                    <h1 className=" font-semibold">Mirzapur, Tangail, Dhaka, Bangladesh</h1>
                                </div>
                                <div className="flex items-center gap-3 mb-3 border-2 border-black p-4 rounded-lg">
                                    <div>
                                        <IoIosTimer className="size-11 p-2 bg-[#fff5f0] rounded-lg border-2 border-black" />
                                    </div>
                                    <h1 className=" font-semibold">Office Hours - 9am - 6 pm</h1>
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