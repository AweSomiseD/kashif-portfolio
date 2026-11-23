import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiStripe,
  SiPostman,
  SiVercel,
  SiJsonwebtokens,
} from "react-icons/si";
import Reveal from "../Reveal";

const groups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact },
      { name: "JavaScript", icon: FaJs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Integrations",
    skills: [
      { name: "Stripe", icon: SiStripe },
      { name: "JWT Auth", icon: SiJsonwebtokens },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];

function SkillsSection() {
  return (
    <section className="bg-[#f0f1f3] px-4 py-12 sm:px-8 lg:px-20 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-3xl font-[Recoleta] sm:text-4xl lg:text-4xl">Skills & Tech Stack</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500">
            The tools I use to build full-stack web applications.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12 lg:gap-6">
          {groups.map(({ title, skills }, i) => (
            <Reveal key={title} delay={(i % 2) * 150}>
              <div className="h-full rounded-xl bg-white p-6 shadow-md">
                <h3 className="text-lg font-[Recoleta]">{title}</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {skills.map(({ name, icon: Icon }) => (
                    <span
                      key={name}
                      className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-xs text-gray-700 transition-transform duration-300 hover:-translate-y-0.5 dark:border-gray-700"
                    >
                      <Icon className="text-base" />
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
