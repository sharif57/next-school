const AboutBanner = () => {
    return <div>
        <div className=" pt-10 ">
            <div
                className=" bg-no-repeat h-44 py-60 bg-white border-2 border-black rounded-lg  shadow-2xl border-b-8 border-r-8 "
                style={{ backgroundImage: `url('https://i.ibb.co.com/NjJWg6j/Abstract-Design.png')` }}
            >
                <div className="flex items-center justify-between gap-20 pl-36 pt-">
                    <div>
                        <p className="btn btn-outline  font-semibold text-black">Children Deserve Bright Future</p>
                        <h1 className="text-5xl font-semibold mt-3 text-black">Welcome to Little Learners Academy</h1>
                    </div>
                    <div className="w-1/2 text-black">
                        <p>A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};
export default AboutBanner;