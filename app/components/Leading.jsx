/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

const Leading = () => {
    return <div>
        <div class="card bg-white border-2 border-gray-800 shadow-lg rounded-lg p-5 w-56 h-72 flex flex-col justify-start gap-2">
            <div class="card-img flex justify-center transition-transform duration-500 ease-in-out">
                {/* <img src="path_to_image.jpg" class="w-24 h-24 rounded-full border-2 border-black" alt="Card Image" /> */}
                <Image height={100} width={200} src={'/Language Arts.jpg'}></Image>
        </div>
        <div class="card-title text-center text-lg font-medium text-gray-800">
        Language Arts
        </div>
        <div class="card-subtitle text-sm text-gray-600">
            Card Subtitle
        </div>
        <div class="card-divider w-full border border-gray-800 rounded-full"></div>
        <div class="card-footer flex justify-between items-center">
            <div class="card-price text-lg font-medium text-gray-800">
                $50 <span class="text-gray-600">/unit</span>
            </div>
            <button class="card-btn bg-white border-2 border-gray-800 rounded-md px-4 py-1 transition-colors duration-300 hover:border-blue-600 hover:text-blue-600 active:translate-y-1">
                <svg class="w-4 h-4 fill-current text-gray-800 hover:text-blue-600" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 0l3.09 6.26L20 7.27l-5 4.87L16.18 20 10 16.91 3.82 20 5 12.14 0 7.27l6.91-1L10 0z" /></svg>
            </button>
        </div>
    </div>

    </div >;
};
export default Leading;