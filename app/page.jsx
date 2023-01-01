import React from "react";
import Image from "next/image";
import heroImg from "../public/myPic.png";

export default function Home() {
  const SocialMediaLinks = [
    {
      name: "Faceboo",
      link: "https://facebook.com",
      icon: "/icons/facebook.svg",
      shadowColor: "shadow-blue-500",
    },
    {
      name: "Instagram",
      link: "https://instagram.com",
      icon: "/icons/instagram.svg",
      shadowColor: "shadow-pink-500",
    },
    {
      name: "Twitter",
      link: "https://twitter.com",
      icon: "/icons/twitter.svg",
      shadowColor: "shadow-sky-400",
    },
    {
      name: "Github",
      link: "https://github.com",
      icon: "/icons/github.svg",
      shadowColor: "shadow-gray-900",
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com",
      icon: "/icons/linkedin.svg",
      shadowColor: "shadow-sky-600",
    },
  ];

  return (
    <main className="flex flex-col lg:flex-row items-center justify-center">
      <div className="w-full lg:w-[50%] h-screen text-white">
        {/* Hero Text */}
        <div className="flex flex-col items-center justify-center h-full pb-36">
          <h1 className="text-5xl font-bold text-gray-700 text-center tracking-wider">
            Hello, I'm <br />{" "}
            <span className="text-sky-500 drop-shadow-xl"> Milan Thapa</span>
          </h1>
          <p className="text-3xl font-semibold text-gray-600 tracking-wider">
            I'm a Web Developer
          </p>
          <div className="flex space-x-4 mt-4">
            {SocialMediaLinks.map((link) => (
              <a
                key={link.name}
                href={link.link}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={link.icon}
                  alt={link.name}
                  priority
                  width={30}
                  height={30}
                  className={`shadow-lg rounded-full animate-bounce ${link.shadowColor}`}
                />
              </a>
            ))}
          </div>
          <div className="mt-12 space-x-4 flex justify-center items-center">
            <button className="bg-black py-3 px-3 rounded-md cursor-pointer tracking-wider font-bold hover:bg-black/80 hover:scale-105 duration-500">Contact Me</button>
            <button className="border-2 border-gray-300 text-sky-400 tracking-wider font-bold py-3 px-3 rounded-md cursor-pointer hover:bg-gray-300 hover:scale-105 duration-500">Contact Me</button>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[50%] h-screen text-white">
        {/* Hero Image */}
        <div className="flex items-center justify-center lg:justify-start h-[95%]">
          <Image
            src={heroImg}
            alt="Hero Image"
            width={500}
            height={400}
            className="rounded-full shadow-lg shadow-cyan-400"
          />
        </div>
      </div>
    </main>
  );
}
