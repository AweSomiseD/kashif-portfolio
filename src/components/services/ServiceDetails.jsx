import { Link } from "react-router-dom";
import {
  FaRegWindowMaximize,
  FaDesktop,
  FaMobileAlt,
  FaTools,
  FaCheckCircle,
  FaServer,
  FaArrowRight,
} from "react-icons/fa";
import Reveal from "../Reveal";

const services = [
  {
    id: "website-development",
    number: "01",
    title: "Website Development",
    description:
      "Complete websites and web apps built with the MERN stack, tailored to your business goals.",
    icon: FaRegWindowMaximize,
    panel: "bg-[#c8f7ff] text-cyan-800",
    includes: [
      "Full-stack development (React, Node.js, Express, MongoDB)",
      "Custom features built around your requirements",
      "Admin panels and dashboards",
      "Deployment and launch",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    id: "front-end-development",
    number: "02",
    title: "Front-End Development",
    description:
      "Interactive, good-looking interfaces that are fast and easy to use.",
    icon: FaDesktop,
    panel: "bg-[#f1fcd0] text-lime-800",
    includes: [
      "React components built from your design",
      "Clean layouts with Tailwind CSS",
      "Smooth animations and interactions",
      "API integration with your backend",
    ],
    tech: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    id: "back-end-development",
    number: "03",
    title: "Back-End Development",
    description:
      "Secure, scalable servers and APIs that power your website behind the scenes.",
    icon: FaServer,
    panel: "bg-[#ece8ff] text-violet-800",
    includes: [
      "REST API design and development",
      "Authentication and role-based access control",
      "MongoDB database design and management",
      "Real-time features and third-party integrations such as Stripe",
    ],
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    id: "responsive-web-design",
    number: "04",
    title: "Responsive Web Design",
    description:
      "Websites that look and work great on desktops, tablets, and phones.",
    icon: FaMobileAlt,
    panel: "bg-[#ffe3f2] text-pink-800",
    includes: [
      "Mobile-first layouts",
      "Testing across screen sizes and browsers",
      "Optimized images and loading speed",
      "Dark and light theme support",
    ],
    tech: ["HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    id: "website-maintenance",
    number: "05",
    title: "Website Maintenance",
    description:
      "Ongoing care so your website stays fast, secure, and up to date.",
    icon: FaTools,
    panel: "bg-[#ddfbd9] text-green-800",
    includes: [
      "Bug fixes and small improvements",
      "Content and feature updates",
      "Performance improvements",
      "Help after deployment",
    ],
    tech: ["Git", "GitHub", "Vercel"],
  },
];

function ServiceDetails() {
  return (
    <section className="bg-white px-4 py-12 sm:px-8 lg:px-20 lg:py-20">
      <div className="mx-auto max-w-5xl space-y-14 lg:space-y-20">
        {services.map(
          (
            {
              id,
              number,
              title,
              description,
              icon: Icon,
              panel,
              includes,
              tech,
            },
            i,
          ) => (
            <Reveal key={id}>
              <div
                id={id}
                className="grid scroll-mt-32 grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-12"
              >
                {/* Panel */}
                <div
                  className={`keep-colors flex h-64 flex-col items-center justify-center rounded-2xl shadow-md sm:h-72 lg:h-72 ${panel} ${
                    i % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <Icon className="text-7xl" />
                  <span className="mt-4 text-4xl font-semibold">{number}</span>
                </div>

                {/* Content */}
                <div>
                  <h2 className="text-3xl font-[Recoleta]">{title}</h2>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <FaCheckCircle className="mt-0.5 shrink-0 text-green-600" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-gray-300 px-3 py-1 text-[11px] text-gray-600 dark:border-gray-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/contact?service=${id}`}
                    className="group mt-6 inline-flex items-center gap-2 bg-black px-5 py-2.5 text-sm text-white transition-opacity hover:opacity-80"
                  >
                    Request this service
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ),
        )}
      </div>
    </section>
  );
}

export default ServiceDetails;
