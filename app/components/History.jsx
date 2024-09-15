/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const History = () => {
    return <div>
        <div className="px-8 mt-[130px] pb-10 text-black">
            <div className="w-1/2 mx-auto text-center space-y-4 ">
                <p className="btn btn-outline text-black font-semibold">Our Progressive Journey</p>
                <h1 className="text-5xl  font-bold">Our History</h1>
                <p>Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment.</p>
            </div>

            <div className="mt-14 bg-white py-9 px-6 border-2 border-black border-b-8 border-r-8 rounded-lg shadow-lg  ">
                <div className="border-[#ffef99] border-l-4 space-y-8 flex flex-col gap-6">

                    {/* Card 1 */}
                    <div className="flex justify-between items-center gap-10 px-20">
                        <div className="flex items-center gap-3 border-black px-8 py-4 justify-center border-2 rounded-lg shadow-2xl border-b-8 border-r-8 w-[300px] h-[120px]">
                            <Image height={12} width={12} className="size-16" src="https://i.ibb.co/MB2tR5h/Abstract-Design-1.png"alt="" />
                            <h1 className="text-4xl font-semibold">2024</h1>
                        </div>
                        <div className="w-[800px]">
                            <h1 className="text-4xl font-semibold mb-2">Resilience and Future Horizons</h1>
                            <p className="text-sm">Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex justify-between items-center gap-10 px-20">
                        <div className="flex items-center gap-3 border-black px-8 py-4 justify-center border-2 rounded-lg shadow-2xl border-b-8 border-r-8 w-[300px] h-[120px]">
                            <Image height={12} width={12} className="size-16"  src="https://i.ibb.co/MB2tR5h/Abstract-Design-1.png" alt="" />
                            <h1 className="text-4xl font-semibold">2023</h1>
                        </div>
                        <div className="w-[800px]">
                            <h1 className="text-4xl font-semibold mb-2">Innovation and Technology</h1>
                            <p className="text-sm">Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students.</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex justify-between items-center gap-10 px-20">
                        <div className="flex items-center gap-3 border-black px-8 py-4 justify-center border-2 rounded-lg shadow-2xl border-b-8 border-r-8 w-[300px] h-[120px]">
                            <Image height={12} width={12} className="size-16"  src="https://i.ibb.co/MB2tR5h/Abstract-Design-1.png" alt="" />
                            <h1 className="text-4xl font-semibold">2022</h1>
                        </div>
                        <div className="w-[800px]">
                            <h1 className="text-4xl font-semibold mb-2">Expansion and Recognition</h1>
                            <p className="text-sm">These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies.</p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="flex justify-between items-center gap-10 px-20">
                        <div className="flex items-center gap-3 border-black px-8 py-4 justify-center border-2 rounded-lg shadow-2xl border-b-8 border-r-8 w-[300px] h-[120px]">
                            <Image height={12} width={12} className="size-16"  src="https://i.ibb.co/MB2tR5h/Abstract-Design-1.png"alt="" />
                            <h1 className="text-4xl font-semibold">2021</h1>
                        </div>
                        <div className="w-[800px]">
                            <h1 className="text-4xl font-semibold mb-2">Inception and Growth</h1>
                            <p className="text-sm">Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>;
};
export default History;