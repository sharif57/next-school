const AboutBanner = () => {
    return <div>
      
        <div className=" pt-10 text-black ">

            <div
                className=" bg-no-repeat lg:h-44  lg:py-60     bg-white border-2 border-black rounded-lg  shadow-2xl border-b-8 border-r-8 "
                style={{ backgroundImage: `url('https://i.ibb.co/NjJWg6j/Abstract-Design.png')` }}
            >
                <div className="lg:flex lg:mt-0  mt-52 lg:p-0 p-4 items-center justify-between lg:gap-20 lg:pl-36 ">
                    <div>
                        <p className="btn btn-outline text-black font-semibold">Children Deserve Bright Future</p>
                        <h1 className="lg:text-5xl text-2xl font-semibold mt-3">Welcome to Little Learners Academy</h1>
                    </div>
                    <div className="lg:w-1/2">
                    <p>A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};
export default AboutBanner;