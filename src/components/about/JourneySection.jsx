import Reveal from "../Reveal";

const milestones = [
  {
    label: "Getting Started",
    text: "Started learning web development and chose the MERN stack.",
  },
  {
    label: "First Full-Stack Projects",
    text: "Built complete applications with React, Express, and MongoDB.",
  },
  {
    label: "Sonora Music Platform",
    text: "Built a role-based music platform with separate Listener and Artist dashboards.",
  },
  {
    label: "Freelancing",
    text: "Started offering custom website development on Fiverr & Upwork.",
  },
];

function JourneySection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-8 lg:px-20 lg:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-[Recoleta] sm:text-4xl lg:text-4xl">My Journey</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500">
            A quick look at how I got here and where I'm heading.
          </p>
        </div>

        <div className="relative mt-10 border-l-2 border-gray-300 pl-7 sm:pl-10 lg:mt-14 dark:border-gray-700">
          {milestones.map(({ label, text }, i) => (
            <Reveal
              key={label}
              delay={i * 120}
              className="relative pb-10 last:pb-0"
            >
              <span className="absolute left-[-2.15rem] top-1 h-4 w-4 rounded-full border-4 border-white bg-black sm:left-[-3.2rem] dark:border-[#0a0a0a]" />
              <h3 className="text-lg font-[Recoleta]">{label}</h3>
              <p className="mt-1 text-sm leading-6 text-gray-500">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JourneySection;
