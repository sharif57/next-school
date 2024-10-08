// /* eslint-disable jsx-a11y/alt-text */
// import Image from "next/image";

// const Leading = () => {


//     const schools = [
//         {
//             "name": "Mathematics",
//             "image_url": "https://i.ibb.co/Jj65DdB/learning-education-mathematics-calculation-teaching-concept.jpg",
//             "description": "Mathematics is the study of numbers, quantities, shapes, and patterns. It involves critical thinking and problem-solving skills to understand and apply mathematical concepts in real-world scenarios, including algebra, geometry, calculus, and statistics."
//         },
//         {
//             "name": "Science",
//             "image_url": "https://i.ibb.co/MsY4gzt/female-scientist-teaching-young-girls-chemistry-experiments.jpg",
//             "description": "Science is the systematic study of the natural world through observation and experimentation. It covers various disciplines, such as biology, chemistry, physics, and earth sciences, aimed at understanding the physical and biological aspects of the universe."
//         },
//         {
//             "name": "Social Studies",
//             "image_url": "https://i.ibb.co/r3VKxLs/vintage-marine-still-life-close-up.jpg",
//             "description": "Social Studies is the study of human society, history, geography, and cultures. It helps students understand the world and their place in it, exploring themes such as government, economics, sociology, and global events."
//         },
//         {
//             "name": "Arts and Crafts",
//             "image_url": "https://i.ibb.co/s1C9r98/paper-near-easter-eggs-willow-twigs-tablet-stationery.jpg",
//             "description": "Arts and Crafts is a subject that promotes creativity and artistic expression. Students engage in hands-on activities like drawing, painting, sculpture, and crafting, helping them develop fine motor skills, visual-spatial awareness, and creative problem-solving abilities."
//         },
//         {
//             "name": "Physical Education",
//             "image_url": "https://i.ibb.co/4mk0C23/sports-teacher-with-her-students-1.jpg",
//             "description": "Physical Education focuses on physical activity, fitness, and health. It helps students develop motor skills, coordination, and teamwork while promoting an understanding of the importance of regular exercise, healthy habits, and overall well-being."
//         },
//         {
//             "name": "Language Arts",
//             "image_url": "https://i.ibb.co/cTXZXFg/Language-Arts.jpg",
//             "description": "Language Arts is the study of reading, writing, speaking, and listening skills. It helps students understand and use language effectively, interpret texts, engage in discussions, and express ideas clearly. This subject includes literature, grammar, composition, and rhetoric."
//         }
//     ]

//     return <div className="mt-[130px] text-black">
//         <div className="w-1/2 mx-auto text-center space-y-4 ">
//             <p className="btn btn-outline text-black font-semibold">
//                 Our Subjects 🤗
//             </p>
//             <h1 className="text-5xl font-bold">Our Subjects or Course</h1>
//             <p>
//                 A subject is an area of study, like history. A major is a concentration of studies, usually with specific requirements (i.e., number of courses required and in what particular courses). A course is a specific class that often lasts for one or two semesters. An example would be Advanced Geometry.
//             </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-9 mt-10">
//             {
//                 schools.map((school, index) => (
//                     <div key={index} className="card bg-white border-2 border-gray-800 border-r-8 border-b-8 shadow-lg rounded-lg p-5 flex flex-col justify-start gap-2">
//                         <div className="card-img flex justify-center transition-transform duration-500 ease-in-out">
//                             {/* Image component for optimized image rendering */}
//                             <Image height={100} width={400} src={school.image_url} alt="School Image" />
//                         </div>
//                         <div className="card-title text-center text-lg font-medium text-gray-800">
//                             {school.name}
//                         </div>
//                         <div className="card-subtitle text-sm text-gray-600">
//                             {school.description}
//                         </div>
//                         <div className="card-divider w-full border border-gray-800 rounded-full"></div>
//                         <div className="card-footer flex justify-between items-center">
//                             <div className="card-price text-lg font-medium text-gray-800">
//                                 $50 <span className="text-gray-600">/unit</span>
//                             </div>
//                         </div>
//                     </div>
//                 ))
//             }
//         </div>

//     </div >;
// };
// export default Leading;