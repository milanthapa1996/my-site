import React from "react";
import Image from "next/image";

const Contact = () => {
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
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <h1 className="text-5xl font-bold leading-tight dark:text-white">
              {" "}
              Contact <span className="text-sky-500"> Me</span>{" "}
            </h1>
            <div className="flex mt-1 mb-10 overflow-hidden rounded w-14">
              <div className="flex-1 h-2 bg-blue-200"></div>
              <div className="flex-1 h-2 bg-blue-400"></div>
              <div className="flex-1 h-2 bg-blue-600"></div>
            </div>

            <div className="mt-8">
              {/* contact info */}
              {/* Phone number icon and text */}
              <div className="flex items-center">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>

                <a
                  href="tel:1234567890"
                  className="ml-2 text-gray-600 dark:text-gray-400"
                >
                  {" "}
                  +977- 9860959177{" "}
                </a>
              </div>

              {/* Email icon and text */}
              <div className="flex items-center mt-4">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>

                <a
                  href="mailto:
                  "
                  className="ml-2 text-gray-600 dark:text-gray-400"
                >
                  tmilan0604@gmali.com{" "}
                </a>
              </div>

              {/* Address icon and text */}
              <div className="flex items-center mt-4">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="ml-2 text-gray-600 dark:text-gray-400">
                  {" "}
                  Gulmi, Nepal{" "}
                </span>
              </div>

              {/* Follow me on social media*/}
              <div className="flex items-center mt-6 space-x-2">
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
            </div>
          </div>

          <div className="rounded-lg bg-white p-4 shadow-lg lg:col-span-3 lg:p-10">
            <form action="" className="space-y-4">
              <div>
                <label className="sr-only" for="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" for="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label className="sr-only" for="phone">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>
              <div>
                <label className="sr-only" for="message">
                  Message
                </label>
                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  id="message"
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
                >
                  <span className="font-medium"> Send Enquiry </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-3 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
