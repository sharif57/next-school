/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
const Library = () => {

    const data = [
        {
            src: '/Image (5).png',
        },
        {
            src: '/Image (6).png',

        },
        {
            src: '/Image (7).png',

        },
        {
            src: '/Image (8).png',
        },
    ];
    return <div className='px-8'>
        <div>
            <div className="relative -mb-28 w-5/6 mx-auto">
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
                    <h1 className="text-4xl font-semibold">Library</h1>
                    <p className="mt-4">Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development.</p>
                </div>
            </div>
        </div>
    </div>;
};
export default Library;