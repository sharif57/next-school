import { FaGraduationCap } from "react-icons/fa";
import { FaBookAtlas } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { MdEmojiEvents } from "react-icons/md";

const successData = [
  { id: 1, number: '13286', label: 'Success Stories' },
  { id: 2, number: '678', label: 'Trusted Tutors' },
  { id: 3, number: '347', label: 'Scheduled Events' },
  { id: 3, number: '1912', label: 'Available Courses' },
];

const Stories = () => {
    return (
        <div>
            <div className="mt-[120px]">
                <div className="hero lg:h-[300px] p-6 bg-fixed relative" style={{ backgroundImage: 'url(/building.jpg)' }}>
                    {/* Overlay for background opacity */}
                    <div className="absolute inset-0 bg-black opacity-40"></div>

                    {/* Content with no opacity */}
                    <div className="relative flex justify-between gap-[100px] items-center">
                            <div className="text-center text-white flex flex-col items-center space-y-3">
                                <FaGraduationCap className="size-20" />
                                <h1 className="text-6xl font-semibold font-mono">1000</h1>
                                <p className="text-4xl font-semibold">Success Stories</p>
                            </div>
                            <div className="text-center text-white flex flex-col items-center space-y-3">
                            <GiTeacher className="size-20" />
                            <h1 className="text-6xl font-semibold font-mono">200</h1>
                                <p className="text-4xl font-semibold">Trusted Tutors</p>
                            </div>
                            <div className="text-center text-white flex flex-col items-center space-y-3">
                            <MdEmojiEvents className="size-20" />
                            <h1 className="text-6xl font-semibold font-mono">210</h1>
                                <p className="text-4xl font-semibold">Scheduled Events</p>
                            </div>
                            <div className="text-center text-white flex flex-col items-center space-y-3">
                            <FaBookAtlas className="size-20" />
                            <h1 className="text-6xl font-semibold font-mono">139</h1>
                                <p className="text-4xl font-semibold">Available Courses</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stories;
