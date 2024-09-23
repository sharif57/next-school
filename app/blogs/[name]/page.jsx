/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { useRouter } from "next/router";

const Page = () => {
    const blogs = [
        {
            "name": "Mathematics",
            "title": "Advanced Mathematics for High School Students",
            "image_url": "https://i.ibb.co/Jj65DdB/learning-education-mathematics-calculation-teaching-concept.jpg",
            "description": "Mathematics is the study of numbers, quantities, shapes, and patterns. It involves critical thinking and problem-solving skills to understand and apply mathematical concepts in real-world scenarios, including algebra, geometry, calculus, and statistics.",
            "session_fee": 50,
            "discount": 10,
            "contact_info": {
                "email": "math@eduplatform.com",
                "phone": "+123456789"
            }
        },
        {
            "name": "Science",
            "title": "Interactive Science Experiments for Young Learners",
            "image_url": "https://i.ibb.co/MsY4gzt/female-scientist-teaching-young-girls-chemistry-experiments.jpg",
            "description": "Science is the systematic study of the natural world through observation and experimentation. It covers various disciplines, such as biology, chemistry, physics, and earth sciences, aimed at understanding the physical and biological aspects of the universe.",
            "session_fee": 45,
            "discount": 15,
            "contact_info": {
                "email": "science@eduplatform.com",
                "phone": "+987654321"
            }
        },
        {
            "name": "Social Studies",
            "title": "Understanding Global Societies and Cultures",
            "image_url": "https://i.ibb.co/r3VKxLs/vintage-marine-still-life-close-up.jpg",
            "description": "Social Studies is the study of human society, history, geography, and cultures. It helps students understand the world and their place in it, exploring themes such as government, economics, sociology, and global events.",
            "session_fee": 40,
            "discount": 5,
            "contact_info": {
                "email": "socialstudies@eduplatform.com",
                "phone": "+112233445"
            }
        },
        {
            "name": "Arts and Crafts",
            "title": "Creative Arts and Crafts Workshop",
            "image_url": "https://i.ibb.co/s1C9r98/paper-near-easter-eggs-willow-twigs-tablet-stationery.jpg",
            "description": "Arts and Crafts is a subject that promotes creativity and artistic expression. Students engage in hands-on activities like drawing, painting, sculpture, and crafting, helping them develop fine motor skills, visual-spatial awareness, and creative problem-solving abilities.",
            "session_fee": 35,
            "discount": 10,
            "contact_info": {
                "email": "arts@eduplatform.com",
                "phone": "+556677889"
            }
        },
        {
            "name": "Physical Education",
            "title": "Physical Fitness and Health Awareness",
            "image_url": "https://i.ibb.co/4mk0C23/sports-teacher-with-her-students-1.jpg",
            "description": "Physical Education focuses on physical activity, fitness, and health. It helps students develop motor skills, coordination, and teamwork while promoting an understanding of the importance of regular exercise, healthy habits, and overall well-being.",
            "session_fee": 30,
            "discount": 8,
            "contact_info": {
                "email": "pe@eduplatform.com",
                "phone": "+998877665"
            }
        },
        {
            "name": "Language Arts",
            "title": "Mastering Language Arts and Communication",
            "image_url": "https://i.ibb.co/cTXZXFg/Language-Arts.jpg",
            "description": "Language Arts is the study of reading, writing, speaking, and listening skills. It helps students understand and use language effectively, interpret texts, engage in discussions, and express ideas clearly. This subject includes literature, grammar, composition, and rhetoric.",
            "session_fee": 55,
            "discount": 12,
            "contact_info": {
                "email": "languagearts@eduplatform.com",
                "phone": "+445566778"
            }
        }
    ]

    const router = useRouter();
    const { blogName } = router.query;
  
    // Find the blog with the matching name
    const blog = blogs.find((blog) => blog.name === blogName);
  
    // If no blog is found, return an error message
    if (!blog) {
      return <p className="text-red-500">Blog not found!</p>;
    }
  
    const { title, description, image_url, session_fee, discount, contact_info } = blog;

    const { title, description, image_url, session_fee, discount, contact_info } = blogs.find((blog) => blog.name === blog.name)

    return <div className="flex flex-col md:flex-row items-center p-10 gap-10 bg-gray-50 rounded-lg shadow-lg">
        {/* Blog Content (Text) */}
        <div className="md:w-1/2 text-gray-900">
            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            <p className="text-lg mb-4">{description}</p>
            <p className="text-lg font-semibold">Session Fee: ${session_fee}</p>
            {discount && <p className="text-lg text-green-600">Discount: ${discount}</p>}
            <div className="mt-4">
                <h3 className="text-md font-medium">Contact Information</h3>
                <p>Email: {contact_info.email}</p>
                <p>Phone: {contact_info.phone}</p>
            </div>
        </div>

        {/* Blog Image */}
        <div className="md:w-1/2">
            <Image
                height={200}
                width={400}
                src={image_url}
                alt={`${title} Image`}
                className="rounded-lg shadow-md object-cover"
            />
        </div>
    </div>
};
export default Page;