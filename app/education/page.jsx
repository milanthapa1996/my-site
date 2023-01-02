import React from "react";

const Education = () => {
  const educationList = [
    {
      id: 1,
      name: "Arjun Boarding Higher Secondary School",
      degree: "SLC",
      date: "2013",
    },
    {
      id: 2,
      name: "Moonlight Higer Secondary",
      degree: "+2 Science",
      date: "2015",
    },
    {
      id: 3,
      name: "Kathmandu University",
      degree: "B.E Computer Engineering",
      date: "2020",
    },

    {
      id: 4,
      name: "Indira Gandhi National Open University, India",
      degree: "MBA",
      date: "Present",
    },
  ];
  return (
    <section className="items-center pt-16 font-poppins dark:bg-gray-800">
      <div className="justify-center max-w-6xl px-5 py-4 mx-auto lg:py-8 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center ">
            <div className="relative flex flex-col items-center">
              <div className="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10">
                EDUCATION
              </div>
              <h1 className="text-5xl font-bold leading-tight dark:text-white">
                {" "}
                My Education <span className="text-blue-500">
                  {" "}
                  Timeline
                </span>{" "}
              </h1>
              <div className="flex mt-1 mb-10 overflow-hidden rounded w-14">
                <div className="flex-1 h-2 bg-blue-200"></div>
                <div className="flex-1 h-2 bg-blue-400"></div>
                <div className="flex-1 h-2 bg-blue-600"></div>
              </div>
            </div>
            <blockquote className="mb-16 text-base text-center text-gray-500 italic">
              “Education is the most powerful weapon which you can use to change
              the world.” —Nelson Mandela
            </blockquote>
          </div>

          <ol className="items-center sm:flex h-full">
            {educationList.map((education) => (
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 text-blue-600 dark:text-blue-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {education.degree}
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {education.date}
                  </time>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    {education.name}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Education;
