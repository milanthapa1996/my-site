import React from "react";

const Skills = () => {
  const skillsList = [
    {
      name: "HTML",
      icon: "/icons/html.svg",
      shadowColor: "shadow-red-400",
    },
    {
      name: "CSS",
      icon: "/icons/css.svg",
      shadowColor: "shadow-blue-400",
    },

    {
      name: "JavaScript",
      icon: "/icons/javascript.svg",
      shadowColor: "shadow-yellow-400",
    },
    {
      name: "ReactJs",
      icon: "/icons/reactjs.svg",
      shadowColor: "shadow-sky-400",
    },
    {
      name: "NodeJs",
      icon: "/icons/nodejs.svg",
      shadowColor: "shadow-green-400",
    },
    {
      name: "MongoDB",
      icon: "/icons/mongodb.svg",
      shadowColor: "shadow-green-400",
    },
    {
      name: "NextJs",
      icon: "/icons/nextjs.svg",
      shadowColor: "shadow-green-400",
    },
    {
      name: "TailwindCss",
      icon: "/icons/tailwindcss.svg",
      shadowColor: "shadow-green-400",
    },
    {
      name: "Python",
      icon: "/icons/python.svg",
      shadowColor: "shadow-yellow-400",
    },
    {
      name: "PostreSQL",
      icon: "/icons/postgresql.svg",
      shadowColor: "shadow-blue-400",
    },
    {
      name: "Git",
      icon: "/icons/git.svg",
      shadowColor: "shadow-red-400",
    },
  ];
  return (
    <section className="items-center pt-16 font-poppins dark:bg-gray-800">
      <div className="justify-center max-w-6xl px-5 py-4 mx-auto lg:py-8 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center ">
            <div className="relative flex flex-col items-center">
              <div className="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10">
                SKILLS
              </div>
              <h1 className="text-5xl font-bold leading-tight dark:text-white">
                {" "}
                My <span className="text-blue-500"> Skills</span>{" "}
              </h1>
              <div className="flex mt-1 mb-10 overflow-hidden rounded w-14">
                <div className="flex-1 h-2 bg-blue-200"></div>
                <div className="flex-1 h-2 bg-blue-400"></div>
                <div className="flex-1 h-2 bg-blue-600"></div>
              </div>
            </div>
            <blockquote className="mb-4 text-base text-center text-gray-500 italic">
              "Skills rest in your mind, not in the props you make use of."
            </blockquote>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 justify-center px-4 max-w-4xl mx-auto">
            {skillsList.map((skill, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center m-2 p-2 rounded-lg shadow-lg ${skill.shadowColor} cursor-pointer hover:scale-105 duration-500 bg-white`}
              >
                <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
                <span className="text-sm font-semibold text-gray-700 mt-1">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
