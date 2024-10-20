import Image from "next/image";

const Mission = () => {
  return (
    <div>
      <div className="lg:px-32 mt-[130px]">
        <div className="lg:w-1/2 mx-auto text-center space-y-4 text-black">
          <p className="btn btn-outline text-black font-semibold">Mission & Visions</p>
          <h1 className="lg:text-5xl text-3xl font-bold">Our Mission & Visions</h1>
          <p>
            We are here to provide a nurturing and inclusive environment where
            young minds can thrive, fostering a love for learning and personal
            growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 text-black">
          <div className="border-2 border-black rounded-lg py-8 px-4 p-12 shadow-2xl border-b-8 border-r-8">
            <div className="flex justify-between items-center">
              <h1 className="text-4xl font-semibold">Mission</h1>
              <Image
                src="https://i.ibb.co/TvW11p5/Icon.png" // Fixed URL
                alt="Mission Icon"
                width={96}  // Specify the width
                height={96} // Specify the height
              />
            </div>
            <p className="mt-8">
              At Little Learners Academy, our mission is to inspire a passion
              for learning and empower young minds to become confident,
              compassionate, and creative individuals. We strive to create a
              safe and inclusive space where children thrive academically,
              socially, and emotionally, setting the stage for a successful
              educational journey.
            </p>
          </div>

          <div className="border-2 border-black rounded-lg py-8 px-4 p-12 shadow-2xl border-b-8 border-r-8">
            <div className="flex justify-between items-center">
              <h1 className="text-4xl font-semibold">Vision</h1>
              <Image
                src="https://i.ibb.co/vwnK72C/Icon-1.png" // Fixed URL
                alt="Vision Icon"
                width={96}  // Specify the width
                height={96} // Specify the height
              />
            </div>
            <p className="mt-4">
              Our vision is to be a beacon of educational excellence, where
              children are encouraged to explore, discover, and express their
              unique talents. We aim to foster a generation of lifelong learners
              equipped with critical thinking, empathy, and a deep appreciation
              for diversity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
