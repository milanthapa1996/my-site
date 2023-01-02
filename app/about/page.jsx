import React from "react";
import Image from "next/image";

const About = () => {
  const jobList = [
    {
      id: 1,
      title: "Web Development",
      icon: "/icons/webdevelopment.svg",
    },
    {
      id: 2,
      title: "UI/UX Design",
      icon: "/icons/uiuxdesign.svg",
    },
    {
      id: 3,
      title: "Database Design & Development",
      icon: "/icons/database.svg",
    },
  ];
  return (
    <section className="items-center pt-16 font-poppins dark:bg-gray-800">
      <div className="justify-center max-w-6xl px-5 py-4 mx-auto lg:py-8 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center ">
            <div className="relative flex flex-col items-center">
              <div className="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10">
                ABOUT ME
              </div>
              <h1 className="text-5xl font-bold leading-tight dark:text-white">
                {" "}
                What I <span className="text-sky-500"> DO ?</span>{" "}
              </h1>
              <div className="flex mt-1 mb-10 overflow-hidden rounded w-14">
                <div className="flex-1 h-2 bg-blue-200"></div>
                <div className="flex-1 h-2 bg-blue-400"></div>
                <div className="flex-1 h-2 bg-blue-600"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          {jobList.map((job) => (
            <article
              className="rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:shadow-sm"
              key={job.id}
            >
              {/* svg icon */}
              <div className="flex justify-center -mt-8">
                <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-xl">
                  <Image
                    src={job.icon}
                    alt="developer"
                    width={50}
                    height={50}
                  />
                </div>
              </div>

              <div className="rounded-[10px] p-4 pt-20 sm:p-6">
                <h3 className="mt-0.5 text-xl font-bold font-mono text-white">
                  {job.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
