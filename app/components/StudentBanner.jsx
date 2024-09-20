/* eslint-disable react/no-unescaped-entities */
const StudentBanner = () => {
    return <div>
        <div className=" pt-10 ">
            <div
                className=" bg-no-repeat h-44 py-60 bg-white border-2 border-black rounded-lg  shadow-2xl border-b-8 border-r-8 "
                style={{ backgroundImage: `url('https://i.ibb.co.com/NjJWg6j/Abstract-Design.png')` }}
            >
                <div className="flex items-center justify-between gap-20 pl-36 pt-">
                    <div>
                        <p className="btn btn-outline  font-semibold text-black">Enriching Student Life</p>
                        <h1 className="text-5xl font-semibold mt-3 text-black">Embracing Learning with Discovery and Joy</h1>
                    </div>
                    <div className="w-1/2 text-black">
                        <p>Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a child's development.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};
export default StudentBanner;