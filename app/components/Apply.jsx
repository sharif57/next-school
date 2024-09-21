import Link from "next/link";

const Apply = () => {
    return (
        <div>
            <div className="mt-[120px]">
                <div className="hero lg:h-[700px] p-6 bg-fixed relative flex justify-around items-center text-black" style={{ backgroundImage: 'url(/school.jpg)' }}>
                    {/* Overlay for background opacity */}
                    <div className="absolute inset-0 bg-black opacity-40"></div>

                    {/* Content with no opacity */}
                    <div className="relative space-y-6 mt-14 z-10">
                        <h1 className="text-8xl font-semibold font-mono">Apply for Admission</h1>
                        <p>BRACU offers 3 semesters a year: Spring, Summer & Fall, and these start in January, May & September respectively. For Pharmacy & LLB: BRACU offers admission for Pharmacy & LLB department twice a year.</p>
                    </div>
                    
                    <div className="relative z-10">
                        <Link href={'/Admissions'} className="bg-gradient-to-r h-16 w-[200px] from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
                            Apply Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Apply;
