import Image from "next/image";

const Student = () => {
  return <div>
    <div className="mt-[130px] px-8 text-black">
      <div className="w-1/2 mx-auto text-center space-y-4 ">
        <p className="btn btn-outline text-black font-semibold">Our Features</p>
        <h1 className="text-5xl  font-bold">What Students Learn</h1>
        <p>At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-14 gap-10">
        <div
          className="border-2 border-black rounded-lg py-8 bg-white px-4 text-center shadow-2xl border-b-8 border-r-8 bg-no-repeat bg-[center_top]"
          style={{ backgroundImage: `url('https://ibb.co/S5Yy5fn')` }}
        >
          <div className="relative mt-5">
            <Image
              src="https://i.ibb.co/bzrmRwr/Image.png"
              alt="Language Arts"
              width={410} // Set appropriate width
              height={200} // Set appropriate height
              layout="intrinsic"
            />
          </div>
          <h1 className="text-2xl font-semibold mb-3 pt-5 mt-5">Language Arts</h1>
          <p className="w-64
 mx-auto">Reading, writing, storytelling, and communication skills.</p>
        </div>

        <div className="border-2 border-black rounded-lg py-8 bg-white px-4 text-center  shadow-2xl border-b-8 border-r-8 bg-no-repeat bg-[center_top] "
          style={{ backgroundImage: `url('https://ibb.co/X5d7M3y')` }}
        >
          <Image width={410} height={200} className="mt-5" src="https://i.ibb.co/4YMrbnt/Image-1.png" alt="" />
          <h1 className="text-2xl font-semibold mb-3 pt-5 mt-5"> Mathematics</h1>
          <p className="w-64 mx-auto">Number sense, basic operations, problem-solving, and logic.</p>
        </div>
        <div className="border-2 border-black rounded-lg py-8 bg-white px-4 text-center  shadow-2xl border-b-8 border-r-8 bg-no-repeat bg-[center_top] "
          style={{ backgroundImage: `url('/Shape.png')` }}
        >
          <Image  width={410} height={200} className="mt-5" src="https://i.ibb.co/GcB3TCk/Image-3.png" alt="" />
          <h1 className="text-2xl font-semibold mb-3 pt-5 mt-5"> Science</h1>
          <p className="w-64 mx-auto">Exploring the natural world through hands-on experiments and investigations.</p>
        </div>
        <div className="border-2 border-black rounded-lg py-8 bg-white px-4 text-center  shadow-2xl border-b-8 border-r-8 bg-no-repeat bg-[center_top] "
          style={{ backgroundImage: `url('/Shape.png')` }}
        >
          <Image  width={410} height={200} className="mt-5" src="https://i.ibb.co/vqKS5mn/Image-2.png" alt="" />
          <h1 className="text-2xl font-semibold mb-3 pt-5 mt-5"> Social Studies</h1>
          <p className="w-64 mx-auto">Cultivating an understanding of diverse cultures and communities.</p>
        </div>
        <div className="border-2 border-black rounded-lg py-8 bg-white px-4 text-center  shadow-2xl border-b-8 border-r-8 bg-no-repeat bg-[center_top] "
          style={{ backgroundImage: `url('/Shape.png')` }}
        >
          <Image  width={410} height={200} className="mt-5" src="https://i.ibb.co/X8vv80v/Image-4.png" alt="" />
          <h1 className="text-2xl font-semibold mb-3 pt-5 mt-5"> Arts and Crafts</h1>
          <p className="w-64 mx-auto">Encouraging creativity through various art forms and crafts.</p>
        </div>
        <div className="border-2 border-black rounded-lg py-8 bg-white px-4 text-center  shadow-2xl border-b-8 border-r-8 bg-no-repeat bg-[center_top] "
          style={{ backgroundImage: `url('/Shape.png')` }}
        >
          <Image  width={410} height={200} className="mt-5" src="https://i.ibb.co/WF2Ppc5/Image-5.png" alt="" />
          <h1 className="text-2xl font-semibold mb-3 pt-5 mt-5"> Physical Education</h1>
          <p className="w-64 mx-auto">Promoting physical fitness, coordination, and teamwork..</p>
        </div>

      </div>
    </div>
  </div>;
};
export default Student;