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
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 justify-center pt-16 px-4 max-w-4xl mx-auto">
        {skillsList.map((skill, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center m-2 p-2 rounded-lg shadow-lg ${
              skill.shadowColor
            } cursor-pointer hover:scale-105 duration-500 bg-white`}
          >
            <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
            <span className="text-sm font-semibold text-gray-700 mt-1">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
