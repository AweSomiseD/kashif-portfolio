import { FaSearch, FaCode, FaCogs, FaRocket } from "react-icons/fa";
import Reveal from "../Reveal";

const steps = [
  {
    id: "01",
    title: "Planning & Research",
    description:
      "I start by understanding your requirements, target audience, and goals. Then I plan the structure, features, and tech stack before writing any code.",
    icon: FaSearch,
    card: "bg-[#fde8e8]",
    iconBox: "bg-[#f8c9c9] text-[#c0392b]",
  },
  {
    id: "02",
    title: "Development",
    description:
      "I build clean, scalable, and responsive applications using React, Node.js, Express, and MongoDB, with APIs and authentication handled properly.",
    icon: FaCode,
    card: "bg-[#e3eeff]",
    iconBox: "bg-[#c4dafc] text-[#2563eb]",
  },
  {
    id: "03",
    title: "Testing & Optimization",
    description:
      "I test every feature across devices and browsers, fix bugs, and optimize performance so the website runs fast and smoothly.",
    icon: FaCogs,
    card: "bg-[#ece8ff]",
    iconBox: "bg-[#d3cbfa] text-[#6d4ed8]",
  },
  {
    id: "04",
    title: "Launch & Maintenance",
    description:
      "After deployment, I stay available for updates, improvements, and support, so your project keeps working well long after launch.",
    icon: FaRocket,
    card: "bg-[#fff0e0]",
    iconBox: "bg-[#fbd9ae] text-[#d97706]",
  },
];

function WorkProcess() {
  return (
    <section className="bg-white sm:px-4 md:px-6 lg:px-0">
      <div className="rounded-none bg-[#f0f1f3] px-4 py-10 sm:rounded-2xl sm:px-8 sm:py-12 md:px-10 md:py-14 lg:px-12">
        <div className="text-center">
          <h2 className="font-[Recoleta] text-[1.75rem] leading-tight sm:text-3xl md:text-[2.25rem] lg:text-5xl">
            My Work Process
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-gray-500 md:text-lg lg:leading-normal">
            Every website starts with a clear plan. My development process
            combines thoughtful planning, clean code, and careful testing to
            build responsive, high-performing websites.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:mt-10 md:gap-6 lg:mt-12 lg:grid-cols-4">
          {steps.map(
            ({ id, title, description, icon: Icon, card, iconBox }, i) => (
              <Reveal
                key={id}
                delay={(i % 2) * 150}
                className="h-full lg:[--reveal-delay:0ms]"
              >
                <div
                  className={`keep-colors h-full rounded-xl p-5 shadow-md transition-transform duration-300 hover:-translate-y-1 md:p-6 ${card}`}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg text-lg md:h-12 md:w-12 md:text-xl ${iconBox}`}
                    >
                      <Icon />
                    </div>
                    <span className="text-2xl font-semibold text-gray-800">
                      {id}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-gray-900 md:mt-6 md:text-xl">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600 md:text-[0.95rem]">
                    {description}
                  </p>
                </div>
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default WorkProcess;
