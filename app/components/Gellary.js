/* eslint-disable @next/next/no-img-element */


import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';


const Gellary = () => {

    const data = [
        {
            src: '/Image (1).png',
        },
        {
            src: '/Image (2).png',

        },
        {
            src: '/Image (3).png',

        },
        {
            src: '/Image (4).png',
        },
    ];
    return <div>
        <div className="mt-[130px] lg:px-8 text-black">
            <div className="lg:w-1/2 mx-auto text-center space-y-4 ">
                <p className="btn btn-outline text-black hover:bg-[#ffefd5] font-semibold">
                Our Gallery                </p>
                <h1 className="text-5xl font-bold">Our Rooms Gallery</h1>
                <p>
                Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school.
                </p>
            </div>
            <div className="lg:flex  items-center gap-6 justify-center mt-14">
                <button className="btn btn-outline text-black hover:bg-[#ffefd5]">All</button>
                <button className="btn btn-outline text-black hover:bg-[#ffefd5]">Classrooms</button>
                <button className="btn btn-outline text-black hover:bg-[#ffefd5]">Library</button>
                <button className="btn btn-outline text-black hover:bg-[#ffefd5]">Science Lab</button>
                <button className="btn btn-outline text-black hover:bg-[#ffefd5]">Computer Lab</button>
                <button className="btn btn-outline text-black hover:bg-[#ffefd5]">Garden and Nature Area</button>
               
            </div>
            <div>
                <div className="relative lg:-mb-28 -mb-32 lg:w-5/6 mx-auto">
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
                            <div orientation="vertical" key={item.title} className="w-[700px] mt-14 ">
                                <Box className="text-4xl  rounded-lg  text-center">
                                    <img
                                        width={100} // Fixed width
                                        height={200} // Fixed height
                                        src={item.src}
                                        alt="Tania Andrew"
                                        className="inline-block rounded-lg object-cover w-full object-center lg:px-0 px-6"
                                        quality={100} // Ensures the image has maximum quality
                                    />

                                    <Typography level="title-md">
                                        {/* <h5 className="text-xl font-semibold text-slate-800 mb-6 mt-4">{item.title}</h5> */}
                                    </Typography>

                                    <div className="mt-6">
                                        <p className="text-base w-96 text-slate-600 font-medium leading-normal">
                                            {/* {item.description} */}
                                        </p>
                                    </div>
                                </Box>
                            </div>
                        ))}
                    </Box>
                </div>

                <div className="bg-[#ffffff] py-28 border-2 border-r-8 border-b-8    border-black rounded-lg ">

                    <div className="w-5/6 mx-auto">
                        <h1 className="lg:text-4xl text-2xl font-semibold">Classrooms</h1>
                        <p className="mt-4">Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.</p>
                    </div>
                </div>
            </div>


        </div>
    </div>;
};
export default Gellary;