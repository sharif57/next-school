/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return <div>
        <header className="p-4 dark:bg-gray-100 text-black dark:text-gray-800 bg-slate-200 opacity-90">
            <div className="container flex justify-between h-16 mx-auto">
               
                <Image height={200} width={400} src={'https://smartyschool.stylemixthemes.com/kindergarten/wp-content/uploads/2016/09/logo-kindergarten.svg'}></Image>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <Link href={'/'} rel="noopener noreferrer"  className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600">Home</Link>
                    </li>
                    <li className="flex">
                        <Link href={'/about'} rel="noopener noreferrer"  className="flex items-center px-4 -mb-1 border-b-2 dark:border-">About Us</Link>
                    </li>
                    <li className="flex">
                        <Link href={'/academics'} rel="noopener noreferrer"  className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Academics</Link>
                    </li>
                    <li className="flex">
                        <Link href={'/Admissions'} rel="noopener noreferrer"  className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Admissions</Link>
                    </li>
                    <li className="flex">
                        <Link href={'/studentLife'} rel="noopener noreferrer"  className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Student Life</Link>
                    </li>
                    <li className="flex">
                        <Link href={'/contact'} rel="noopener noreferrer"  className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Contact</Link>
                    </li>
                    <li className="flex">
                        <Link href={'/schools'} rel="noopener noreferrer"  className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Blogs</Link>
                    </li>
                    
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <button className="self-center px-8 py-3 rounded">Sign in</button>
                    <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Sign up</button>
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    </div>;
};
export default Navbar;