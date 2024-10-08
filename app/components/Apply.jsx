import Link from "next/link";

const Apply = () => {
    return (
        <div>
            <div className="mt-[120px]">
                <div className="hero lg:h-[700px] p-6 bg-fixed relative lg:flex justify-around items-center text-black" style={{ backgroundImage: 'url(/school.jpg)' }}>
                    <div>
                        {/* Overlay for background opacity */}
                        <div className="absolute inset-0 bg-black opacity-40"></div>

                        {/* Content with no opacity */}
                        <div className="lg:relative space-y-6 lg:mt-14 lg:z-10">
                            <h1 className="lg:text-8xl text-4xl   font-semibold font-mono">Apply for Admission</h1>
                            <p className="">BRACU offers 3 semesters a year: Spring, Summer & Fall, and these start in January, May & September respectively. For Pharmacy & LLB: BRACU offers admission for Pharmacy & LLB department twice a year.</p>
                        </div>
                    </div>

                    <div className="lg:relative lg:z-10">

                        <Link href={'/Admissions'}>
                            <button className="bg-gradient-to-r h-16 lg:mt-0 mt-[400px] w-[200px] from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
                                Apply Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Apply;
