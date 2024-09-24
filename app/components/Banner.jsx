import Image from "next/image";

const Banner = () => {
    return <div>
        <div className="lg:flex items-center justify-around gap-8 lg:px-14 pt-8    text-black">
            <div>
                <Image height={785} width={765} className="border-4 border-black" src="/Image.png" alt="" />
            </div>
            <div>
                <h4 className=" lg:text-2xl font-semibold lg:mt-0 mt-10">Welcome to Little Learners Academy</h4>
                <div className="border-2 border-black lg:w-1/2 mt-2"></div>

                <h1 className="lg:text-5xl text-3xl font-bold mt-6 text-center"> Where Young Minds Blossom  and <span className="text-[#ff9d4c] ">Dreams Take Flight.</span> </h1>
                <p className="mt-6 lg:w-2/3 text-center font-semibold pt-6">Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>

                <div className="lg:flex lg:flex-row lg:justify-around flex flex-col justify-center border-2 rounded-lg border-black shadow-2xl border-b-8 border-r-8 hover:border-[#ff9d4c] items-center bg-[#ffefe5] mt-9 lg:p-6 py-4">
                    <div>
                        <h1 className="text-2xl font-bold">+7000</h1>
                        <p>Students Passed Out</p>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">+37</h1>
                        <p>Awards & Recognitions</p>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">+15</h1>
                        <p>Experience Educators</p>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};
export default Banner;