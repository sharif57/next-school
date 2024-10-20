/* eslint-disable react/no-unescaped-entities */
const StudentBanner = () => {
    return <div className="text-black">
        <div className=" pt-10 ">

            <div
                className=" bg-no-repeat lg:h-44  lg:py-60     bg-white border-2 border-black rounded-lg  shadow-2xl border-b-8 border-r-8 "
                style={{ backgroundImage: `url('https://i.ibb.co/NjJWg6j/Abstract-Design.png')` }}
            >
                <div className="lg:flex lg:mt-0  mt-52 lg:p-0 p-4 items-center justify-between lg:gap-20 lg:pl-36 ">
                    <div>
                        <p className="btn btn-outline text-black font-semibold">Enriching Student Life</p>
                        <h1 className="lg:text-5xl text-2xl font-semibold mt-3">Embracing Learning with Discovery and Joy</h1>
                    </div>
                    <div className="lg:w-1/2">
                    <p>Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a child's development.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};
export default StudentBanner;