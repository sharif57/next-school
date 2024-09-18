import { Card } from "@mui/joy";

import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Test = () => {



    const data = [
        {
            src: 'https://i.ibb.co/z6FB8pB/20240502162307521-jpeg.jpg',
            title: 'Sharif Mahamud',
            description: 'Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!',
        },
        {
            src: 'https://i.ibb.co/3BS6hYj/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-we.jpg',
            title: 'Jowel Rana',
            description: 'My sons social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers',
        },
        {
            src: 'https://i.ibb.co/x2SPyRG/young-bearded-man-with-striped-shirt-1.jpg',
            title: 'Lemon',
            description: 'I am beyond impressed with the progress my son has made since joining Little Learners Academy. The teachers are patient, caring, and truly dedicated to each child',
        },
        {
            src: 'https://i.ibb.co/tmsnZVT/fashion-beautiful-girl-with-bright-make-up-flowers.jpg',
            title: 'Arifull',
            description: 'Little Learners Academy offers a perfect blend of academic rigor and a caring atmosphere. My child has not only excelled in studies but also developed social skills and creativity.',
        },
    ];

    return <div className="mt-[130px] px-8 text-black">
        <div className="w-1/2 mx-auto text-center space-y-4 ">
            <p className="btn btn-outline text-black font-semibold">
                Their Happy Words 🤗
            </p>
            <h1 className="text-5xl font-bold">Our Testimonials</h1>
            <p>
                Our testimonials are heartfelt reflections of the nurturing
                environment we provide, where children flourish both
                academically and emotionally.
            </p>
        </div>
        <Box
            sx={{
                display: 'flex',
                gap: 1,
                py: 1,
                overflow: 'auto',
                width: '100%',
                scrollSnapType: 'x mandatory',
                '& > *': {
                    scrollSnapAlign: 'center',
                },
                // Hide scrollbar for Webkit browsers (Chrome, Safari)
                '::-webkit-scrollbar': { display: 'none' },
                // Hide scrollbar for Firefox
                scrollbarWidth: 'none',
                // Hide scrollbar for Edge and IE
                '-ms-overflow-style': 'none',
            }}
        >
            {data.map((item) => (
                <Card orientation="vertical" key={item.title} variant="outlined" className="w-[700px] mt-14 border-r-8 border-b-8 border-black">
                    <Box sx={{ whiteSpace: 'wrap', mx: 1 }} className="text-4xl text-center">
                        <Image
                            width={58} // Fixed width
                            height={58} // Fixed height
                            src={item.src}
                            alt="Tania Andrew"
                            className="inline-block rounded-full object-cover size-20 object-center"
                            quality={100} // Ensures the image has maximum quality
                        />

                        <Typography level="title-md">
                            <h5 className="text-xl font-semibold text-slate-800 mb-6 mt-4">{item.title}</h5>
                        </Typography>
                        <div className="flex justify-center text-yellow-400">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <div className="mt-6">
                            <p className="text-base w-96 text-slate-600 font-medium leading-normal">
                                {item.description}
                            </p>
                        </div>
                    </Box>
                </Card>
            ))}
        </Box>


    </div>;
};
export default Test;