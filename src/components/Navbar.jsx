import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { LuArrowUpRight } from "react-icons/lu";
import { IoIosSearch } from 'react-icons/io';
import { MdOutlineLightMode } from "react-icons/md";
import { RiTranslate2 } from "react-icons/ri";



function Navbar() {
    return (
        <nav className="bg-gray-900 text-white ">
            <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className='flex items-center space-x-10'>
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <img
                                className="h-5 w-auto"
                                src="https://nodejs.org/static/images/logo.svg"
                                alt="Node.js Logo"
                            />
                        </div>

                        {/* Menu Items */}
                        <div className="hidden md:flex space-x-6 ">
                            <a href="#learn" className="hover:bg-gray-800 py-2 px-3 hover:rounded bg-transparent text-[16px]">Learn</a>
                            <a href="#about" className="hover:bg-gray-800 py-2 px-3 hover:rounded bg-transparent text-[16px]">About</a>
                            <a href="#download" className="hover:bg-gray-800 py-2 px-3 hover:rounded bg-transparent text-[16px]">Download</a>
                            <a href="#blog" className="hover:bg-gray-800 py-2 px-3 hover:rounded bg-transparent text-[16px]">Blog</a>
                            <a href="#docs" className="hover:bg-gray-800 py-2 px-3 hover:rounded bg-transparent text-[16px]">Docs</a>
                            <a href="#certification" className="flex items-center hover:bg-gray-800 py-2 px-3 hover:rounded bg-transparent text-[16px]">Certification <LuArrowUpRight /></a>
                        </div>
                    </div>

                    {/* Search and Icons */}
                    <div className="flex items-center space-x-2">
                        {/* Search Box */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Start typing..."
                                className="bg-gray-800 text-white placeholder-gray-400 px-6 py-3 rounded-md text-sm focus:outline-none"
                            />
                            <IoIosSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>

                        {/* Language Icon */}
                        <div className='flex items-center'>
                            <button className="hover:bg-gray-800 py-2 px-3 hover:rounded bg-transparent">
                                <MdOutlineLightMode className='text-xl' />
                            </button>
                            <button className="hover:bg-gray-800 py-2 px-3 hover:rounded bg-transparent"><RiTranslate2 className='text-xl' /></button>

                            {/* GitHub Icon */}
                            <a href="https://github.com" className="hover:bg-gray-800 py-2 px-3 hover:rounded bg-transparent">
                                <FaGithub className="text-xl" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='border-t border-gray-500' />
        </nav>
    );
}

export default Navbar;
