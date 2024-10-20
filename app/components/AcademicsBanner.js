/* eslint-disable react/no-unescaped-entities */
const AcademicsBanner = () => {
    return <div className="text-black mt-10">
        <div
            className=" bg-no-repeat lg:h-44  lg:py-60     bg-white border-2 border-black rounded-lg  shadow-2xl border-b-8 border-r-8 "
            style={{ backgroundImage: `url('https://i.ibb.co/NjJWg6j/Abstract-Design.png')` }}
        >
            <div className="lg:flex lg:mt-0  mt-52 lg:p-0 p-4 items-center justify-between lg:gap-20 lg:pl-36 ">
                <div>
                    <p className="btn btn-outline text-black font-semibold">Academics</p>
                    <h1 className="lg:text-5xl text-2xl font-semibold mt-3">Nurturing Young Minds for Success</h1>
                </div>
                <div className="lg:w-1/2">
                    <p>Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration.</p>
                </div>
            </div>
        </div>
    </div>;
};
export default AcademicsBanner;