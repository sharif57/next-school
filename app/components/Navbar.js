

import Image from "next/image";
import Link from "next/link";



import { RiMenuUnfoldFill } from "react-icons/ri";

const Navbar = () => {
    return <div className="fixed top-0 left-0 w-full dark:bg-gray-100 text-black dark:text-gray-800 bg-slate-200 opacity-90 z-50">
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-20"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg> */}
                        <RiMenuUnfoldFill className="size-10" />

                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-lg dropdown-content bg-indigo-200 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li className="flex">
                            <Link href={'/'} rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600">Home</Link>
                        </li>

                        <li className="flex">
                            <Link href={'/academics'} rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Academics</Link>
                        </li>
                        <li className="flex">
                            <Link href={'/Admissions'} rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Admissions</Link>
                        </li>
                        <li className="flex">
                            <Link href={'/studentLife'} rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Student Life</Link>
                        </li>
                        <li className="flex">
                            <Link href={'/about'} rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">About Us</Link>
                        </li>
                        <li className="flex">
                            <Link href={'/contact'} rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Contact</Link>
                        </li>
                    </ul>
                </div>
                <Link href={'/'}>                <Image height={100} className="h-[50px]" width={400} src={'https://smartyschool.stylemixthemes.com/kindergarten/wp-content/uploads/2016/09/logo-kindergarten.svg'}></Image>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="flex">
                        <Link href={'/'} rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600">Home</Link>
                    </li>

                    <li className="flex">
                        <Link href={'/academics'} rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Academics</Link>
                    </li>
                    <li className="flex">
                        <Link href={'/Admissions'} rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Admissions</Link>
                    </li>
                    <li className="flex">
                        <Link href={'/studentLife'} rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Student Life</Link>
                    </li>
                    <li className="flex">
                        <Link href={'/about'} rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">About Us</Link>
                    </li>
                    <li className="flex">
                        <Link href={'/contact'} rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
            <div className="items-center flex-shrink-0 hidden lg:flex">
                     <Link href={'/login'} className="self-center px-8 py-3 rounded">Sign in</Link>
                    <Link href={'/register'} className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Sign up</Link>            </div>
            </div>
        </div>
    </div>;
};
export default Navbar;