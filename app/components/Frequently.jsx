const Frequently = () => {
    return <div>
        <div className="mt-[130px] text-black">
            <div className="lg:w-1/2 mx-auto text-center space-y-4 ">
                <p className="btn btn-outline text-black font-semibold">Solutions For The Doubts</p>
                <h1 className="lg:text-5xl text-3xl  font-bold">Frequently Asked Questions</h1>
                <p>Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your childs education.</p>
            </div>
            <div className="lg:px-8 lg:flex items-start justify-between lg:space-x-6 mt-[90px]" >
                {/* Left Column */}
                <div className="lg:w-1/2 space-y-4">
                    <div className="collapse collapse-plus border-2 border-black rounded-lg bg-[#ffefe5]">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">What age groups do you accept at Little Learners Academy?</div>
                        <div className="collapse-content">
                            <p>We accept children aged 2 to 6 years old, covering preschool, pre-kindergarten, and kindergarten programs.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-[#ffefe5] border-2 border-black rounded-lg">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">Do you provide meals for the children?</div>
                        <div className="collapse-content">
                            <p>Yes, we provide nutritious meals and snacks throughout the day. Our meal plans are designed to cater to childrens dietary needs, including allergies.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-[#ffefe5] border-2 border-black rounded-lg">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">What is the teacher-to-student ratio?</div>
                        <div className="collapse-content">
                            <p>We maintain a low teacher-to-student ratio of 1:8, ensuring that each child receives personalized attention and care.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-[#ffefe5] border-2 border-black rounded-lg">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">What safety measures are in place at the school?</div>
                        <div className="collapse-content">
                            <p>Our school has a secure entry system, CCTV cameras, and all staff members are trained in emergency protocols and first aid. Safety is our top priority.</p>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="lg:w-1/2 space-y-4 lg:mt-0 mt-3">
                    <div className="collapse collapse-plus bg-[#ffefe5] border-2 border-black rounded-lg">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">Is there a nap time for younger children?</div>
                        <div className="collapse-content">
                            <p>Yes, we have designated nap times for younger children. The nap schedule is part of their daily routine to ensure they get the rest they need.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-[#ffefe5] border-2 border-black rounded-lg">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">What curriculum do you follow?</div>
                        <div className="collapse-content">
                            <p>We follow a play-based learning curriculum, incorporating the Early Years Foundation Stage (EYFS) framework to promote holistic development in children.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-[#ffefe5] border-2 border-black rounded-lg">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">How can parents stay involved in their childs education?</div>
                        <div className="collapse-content">
                            <p>We offer regular parent-teacher meetings, provide progress reports, and encourage parents to participate in school activities and events. We also have an online portal for daily updates.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-[#ffefe5] border-2 border-black rounded-lg">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">Do you offer transportation services?</div>
                        <div className="collapse-content">
                            <p>Yes, we offer safe and reliable transportation services for children within a designated area. Please contact us for more details on routes and availability.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};
export default Frequently;