/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';

const Garden = () => {
    const data = [
        {
            src: '/Image (18).png',
        },
        {
            src: '/Image (19).png',

        },
        {
            src: '/Image (20).png',

        },
        {
            src: '/Image (21).png',
        },
    ];

    return <div className='lg:`px-8'>
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
                                    width={100}
                                    height={200}
                                    src={item.src}
                                    alt="Tania Andrew"
                                    className="inline-block rounded-lg object-cover w-full object-center"
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

            <div className="bg-[#ffffff] py-28 border-2 border-r-8 border-b-8  border-black rounded-lg ">

                <div className="w-5/6 mx-auto text-black">
                    <h1 className="lg:text-4xl text-2xl font-semibold">Garden and Nature Area</h1>
                    <p className="mt-4">Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.</p>
                </div>
            </div>
        </div>
    </div>;;
};
export default Garden;