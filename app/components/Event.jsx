import Image from "next/image";

const Event = () => {
    return <div>
        <div className="mt-[130px] px-8 text-black">
            <div className="w-1/2 mx-auto text-center space-y-4 ">
                <p className="btn btn-outline text-black font-semibold">Our Features</p>
                <h1 className="text-5xl  font-bold">Events & Celebrations</h1>
                <p>At Little Learners Academy, we celebrate every milestone and create cherished memories for our students. Throughout the year, we host a variety of events and celebrations that bring the entire school community together. Some of our memorable events include</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 mt-14 gap-10">
                <div
                    className="border-2 border-black rounded-lg py-8 bg-white px-4 text-center shadow-2xl border-b-8 border-r-8 bg-no-repeat bg-[center_top]"
                    style={{ backgroundImage: `url('/Shape (2).png')` }}
                >
                    <div className="relative mt-5">
                        <Image
                            src="/Image (22).png"
                            alt="Language Arts"
                            width={410} // Set appropriate width
                            height={200} // Set appropriate height
                            layout="intrinsic"
                        />
                    </div>
                    <h1 className="text-2xl font-semibold mb-3 pt-5 mt-5">Annual Sports Day</h1>
                    <p className="w-64
 mx-auto">A day filled with friendly competition, team spirit, and sportsmanship. </p>
                </div>
                <div className="border-2 border-black rounded-lg py-8 bg-white px-4 text-center  shadow-2xl border-b-8 border-r-8 bg-no-repeat bg-[center_top] "
                    style={{ backgroundImage: `url('/Shape (2).png')` }}
                >
                    <Image width={410} height={200} className="mt-5" src="/Image (23).png"
                        alt="" />
                    <h1 className="text-2xl font-semibold mb-3 pt-5 mt-5"> Cultural Festivals</h1>
                    <p className="w-64 mx-auto">Celebrations of diverse cultural festivals, promoting cultural exchange and appreciation.</p>
                </div>
                <div className="border-2 border-black rounded-lg py-8 bg-white px-4 text-center  shadow-2xl border-b-8 border-r-8 bg-no-repeat bg-[center_top] "
                    style={{ backgroundImage: `url('/Shape (2).png')` }}
                >
                    <Image width={410} height={200} className="mt-5" src="/Image (24).png"
                        alt="" />
                    <h1 className="text-2xl font-semibold mb-3 pt-5 mt-5"> Art Exhibitions</h1>
                    <p className="w-64 mx-auto">Showcasing our students' artistic talents through exhibitions and displays. </p>
                </div>
                <div className="border-2 border-black rounded-lg py-8 bg-white px-4 text-center  shadow-2xl border-b-8 border-r-8 bg-no-repeat bg-[center_top] "
                    style={{ backgroundImage: `url('/Shape (2).png')` }}
                >
                    <Image width={410} height={200} className="mt-5" src="/Image (25).png"
                        alt="" />
                    <h1 className="text-2xl font-semibold mb-3 pt-5 mt-5"> Science Fair</h1>
                    <p className="w-64 mx-auto">A platform for budding scientists to present their innovative projects and experiments.</p>
                </div>
                <div className="border-2 border-black rounded-lg py-8 bg-white px-4 text-center  shadow-2xl border-b-8 border-r-8 bg-no-repeat bg-[center_top] "
                    style={{ backgroundImage: `url('/Shape (2).png')` }}
                >
                    <Image width={410} height={200} className="mt-5" src="/Image (28).png"
                        alt="" />
                    <h1 className="text-2xl font-semibold mb-3 pt-5 mt-5"> International Day</h1>
                    <p className="w-64 mx-auto">A vibrant celebration of our diverse community, embracing cultures from around the world.</p>
                </div>
                <div className="border-2 border-black rounded-lg py-8 bg-white px-4 text-center  shadow-2xl border-b-8 border-r-8 bg-no-repeat bg-[center_top] "
                    style={{ backgroundImage: `url('/Shape (2).png')` }}
                >
                    <Image width={410} height={200} className="mt-5" src="/Image (29).png"
                        alt="" />
                    <h1 className="text-2xl font-semibold mb-3 pt-5 mt-5"> Graduation Ceremony</h1>
                    <p className="w-64 mx-auto">A significant milestone as our Kindergarten students prepare to embark on their academic journey.</p>
                </div>

            </div>
        </div>
    </div>;
};
export default Event;