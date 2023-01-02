import React from "react";

const Projects = () => {
  return (
    <section className="items-center pt-16 font-poppins dark:bg-gray-800">
      <div className="justify-center max-w-6xl px-5 py-4 mx-auto lg:py-8 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center ">
            <div className="relative flex flex-col items-center">
              <div className="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10">
                Projects
              </div>
              <h1 className="text-5xl font-bold leading-tight dark:text-white">
                {" "}
                My<span className="text-sky-500"> Projects</span>{" "}
              </h1>
              <div className="flex mt-1 mb-10 overflow-hidden rounded w-14">
                <div className="flex-1 h-2 bg-blue-200"></div>
                <div className="flex-1 h-2 bg-blue-400"></div>
                <div className="flex-1 h-2 bg-blue-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* projects showcase with hoverable github link */}

      <div className="flex flex-wrap justify-center max-w-6xl px-5 mx-auto lg:px-6">
        <div className="w-full px-4 mb-8 lg:w-1/3">
          <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-lg dark:bg-gray-700">
            <div className="px-6 py-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4 text-center">
                  <h6 className="mb-1 text-xl font-semibold leading-tight dark:text-white">
                    <a
                      href="
                      "
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <span className="text-sky-500"> Project Name</span>{" "}
                    </a>
                  </h6>
                  <p className="mb-2 text-sm font-light leading-relaxed text-gray-500 dark:text-gray-400">
                    {" "}
                    Project Description
                  </p>
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4 lg:w-6/12">
                      <div className="relative flex flex-col w-full min-w-0 mb-4">
                        <a
                          href="
                          "
                          target="_blank"
                          rel="noreferrer"
                        >
                          <button
                            className="flex items-center justify-center w-full px-4 py-2 mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-sky-500 rounded shadow outline-none active:bg-sky-600 hover:shadow-lg focus:outline-none"
                            type="button"
                          >
                            <i className="mr-2 text-lg fas fa-code"></i> Github
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
