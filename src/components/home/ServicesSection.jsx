import { Link } from "react-router-dom";
import Reveal from "../Reveal";
import {
  FaRegWindowMaximize,
  FaDesktop,
  FaMobileAlt,
  FaTools,
  FaServer,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    id: "01",
    slug: "website-development",
    title: "Website Development",
    description:
      "I build modern, responsive, and user-friendly websites tailored to your needs and business goals.",
    icon: FaRegWindowMaximize,
    card: "bg-[#c8f7ff] border-cyan-300",
    iconBox: "bg-[#8fe3f0] text-cyan-800",
  },
  {
    id: "02",
    slug: "front-end-development",
    title: "Front-End Development",
    description:
      "I create interactive and visually appealing interfaces using modern web technologies for a smooth user experience.",
    icon: FaDesktop,
    card: "bg-[#f1fcd0] border-lime-300",
    iconBox: "bg-[#d4ec7d] text-lime-800",
  },
  {
    id: "03",
    slug: "back-end-development",
    title: "Back-End Development",
    description:
      "I build secure APIs, authentication systems, and databases that power your website behind the scenes.",
    icon: FaServer,
    card: "bg-[#ece8ff] border-violet-300",
    iconBox: "bg-[#d3cbfa] text-violet-800",
  },
  {
    id: "04",
    slug: "responsive-web-design",
    title: "Responsive Web Design",
    description:
      "I ensure your website looks great and works seamlessly across desktops, tablets, and mobile devices.",
    icon: FaMobileAlt,
    card: "bg-[#ffe3f2] border-pink-300",
    iconBox: "bg-[#f9a8d4] text-pink-800",
  },
  {
    id: "05",
    slug: "website-maintenance",
    title: "Website Maintenance",
    description:
      "I improve website speed, fix bugs, update content, and maintain performance for a reliable online experience.",
    icon: FaTools,
    card: "bg-[#ddfbd9] border-green-300",
    iconBox: "bg-[#86e07a] text-green-800",
  },
];

function ServicesSection() {
  return (
    <section className="bg-white px-4 pb-16 pt-10 sm:px-8 lg:px-20 lg:pb-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-3xl font-medium font-[Recoleta] sm:text-4xl lg:font-semibold">
            My Services
          </h2>
          <p className="mx-auto mt-2 max-w-2xl font-semibold text-sm leading-5 text-gray-600">
            I provide reliable web development services to help businesses and
            individuals build a strong online presence. From creating responsive
            websites to developing interactive features, I focus on clean code,
            modern technologies, and seamless user experiences to turn your
            ideas into reality.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-6">
          {services.map(
            (
              { id, slug, title, description, icon: Icon, card, iconBox },
              i,
            ) => (
              <Reveal
                key={id}
                delay={i * 150}
                className={`h-full sm:col-span-1 lg:col-span-2 ${i === 3 ? "lg:col-start-2" : ""}`}
              >
                <div
                  className={`group keep-colors h-full flex flex-col justify-between rounded-xl border p-6 shadow-md transition-transform duration-300 hover:-translate-y-1 ${card}`}
                >
                  <div className=" flex items-start justify-between">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-md ${iconBox}`}
                    >
                      <Icon />
                    </div>
                    <span className="text-2xl font-semibold text-gray-800">
                      {id}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold font-[Recoleta]">
                    {title}
                  </h3>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    {description}
                  </p>

                  <Link
                    to={`/services#${slug}`}
                    className=" mt-4 inline-flex items-center gap-1 text-sm font-semibold"
                  >
                    Read More{" "}
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
