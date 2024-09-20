const AdmissionCard = () => {

    const cards = [
        {
            title: 'Inquiry',
            description: 'Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy.',
            number: '01'
        },
        {
            title: 'School Tour',
            description: 'Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment.',
            number: '02'
        },
        {
            title: 'Application Form',
            description: "Complete the application form and provide the required documents, including the child's birth certificate, medical records, and any previous academic records.",
            number: '03'
        },
        {
            title: 'Parent Interview',
            description: 'We value parent engagement, and a meeting with our admissions team allows us to understand your childs needs and ensure Little Learners Academy aligns with .',
            number: '04'
        },
        {
            title: 'Student Assessment',
            description: 'For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement.',
            number: '05'
        },
        {
            title: 'Acceptance',
            description: 'Once the admission process is complete, you will receive an official acceptance letter from Little Learners Academy.',
            number: '06'
        },
    ]
    return <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {
            cards.map(card => <div className=" mt-16" key={card.number}>
                <div className="p-4 border-2 border-r-8 border-b-8 border-black rounded-lg w-1/5">
                    <h1 className="text-4xl font-bold">{card.number}</h1>
                </div>
                <img className="-mt-4 h-14" src="/Container.png" alt="" />
                <div>
                    <div className="border-2 border-black rounded-lg py-8 bg-white px-4  relative shadow-2xl border-b-8 border-r-8 ">
                        {/* <BsPower className="size-14 bg-[#ffdecc] rounded-lg p-2 border-2 border-black absolute -mt-14" /> */}
                        <h1 className="text-2xl font-semibold mb-3 pt-5">{card.title}</h1>
                        <p>{card.description}</p>
                    </div>
                </div>
            </div>)
        }

    </div>;
};
export default AdmissionCard;