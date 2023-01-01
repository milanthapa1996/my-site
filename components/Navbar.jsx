import React from "react";
import Image from "next/image";
import profilePic from "../public/logo.png";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="sticky top-0 left-0 z-[500] bg-gray-50 p-4 flex justify-between items-center">
      <div className="lg:hidden">
        <svg
          className="w-8 h-8 cursor-pointer hover:scale-105 duration-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="cursor-pointer hover:scale-105 duration-500">
        <Image
          src={profilePic}
          alt="Picture of the milan thapa"
          priority
          width={150}
          height={100}
        />
      </div>
      <div className="hidden lg:block">
        <ul className="flex justify-between items-center space-x-4">
          <li className="cursor-pointer tracking-wide hover:scale-105 duration-300 hover:border-b-2 border-sky-400 border-dotted">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer tracking-wide hover:scale-105 duration-300 hover:border-b-2 border-sky-400 border-dotted ">
            <Link href="/about">About</Link>
          </li>
          <li className="cursor-pointer tracking-wide hover:scale-105 duration-300 hover:border-b-2 border-sky-400 border-dotted">
            <Link href="/education">Education</Link>
          </li>
          <li className="cursor-pointer tracking-wide hover:scale-105 duration-300 hover:border-b-2 border-sky-400 border-dotted">
            <Link href="/skills">Skills</Link>
          </li>
        </ul>
      </div>
      <div className="text-lg rounded-lg text-sky-400 cursor-pointer flex justify-center items-center space-x-1 group">
        <span>Resume</span>
        <span>
          <svg
            className="w-5 h-5 group-hover:scale-110 duration-500 animate-bounce"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
