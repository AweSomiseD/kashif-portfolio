import portrait from "../../assets/images/Portrait.png";
import Reveal from "../Reveal";
import CountUp from "../CountUp";
import {
  FaBriefcase,
  FaFolderOpen,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";

function ProfileSection() {
  return (
    <section
      id="profile"
      className="profile-scroll-target bg-white px-4 pt-8 scroll-mt-24 sm:px-6 md:pt-10 lg:px-10 xl:px-20 xl:pt-0"
    >
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_2fr_1fr] lg:gap-0">
        {/* Left Column */}
        <div className="flex flex-col gap-8 self-stretch py-4 lg:justify-between lg:gap-0">
          {/* Biography */}
          <div>
            <h3 className="mb-1 text-lg font-medium sm:text-xl lg:font-semibold">Biography</h3>
            <p className="text-sm leading-6 text-gray-500">
              I'm Kashif Altaf, a Full Stack Web Developer from Jhelum,
              Pakistan, specializing in MERN Stack Development. I build
              full-stack web applications using MongoDB, Express.js, React.js,
              and Node.js. My experience includes developing responsive user
              interfaces, RESTful APIs, authentication systems, role-based
              access control, real-time communication, and third-party
              integrations. I enjoy solving development challenges, exploring
              modern technologies, and creating functional, user-friendly web
              experiences.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-1 text-lg font-medium sm:text-xl lg:font-semibold">Services</h3>
            <ul className="list-disc space-y-1.5 pl-4 text-sm text-gray-500">
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>Full-Stack Development</li>
              <li>Authentication & Authorization</li>
              <li>Real-Time Applications</li>
              <li>Third-Party Integrations</li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="mb-1 text-lg font-medium sm:text-xl lg:font-semibold">My Location</h3>
            <p className="text-sm text-gray-500">Jhelum, Punjab, Pakistan</p>
          </div>
        </div>

        {/* Center: Portrait */}
        <div className="relative z-10 order-first flex h-100 items-end justify-center sm:h-120 lg:-mt-25 lg:h-auto lg:order-0">
          <div className="absolute bottom-0 left-1/2 h-88 w-[min(19rem,85vw)] -translate-x-1/2 rounded-t-full bg-[#D9D9D9] sm:h-104 sm:w-[24rem] lg:h-156 lg:w-137" />
          <Reveal>
            <img
              src={portrait}
              alt="Kashif Altaf"
              className="relative z-10 h-105 w-auto max-w-full object-contain object-bottom sm:h-125 lg:h-170"
            />
          </Reveal>
        </div>

        {/* Right Column */}
        <div className="grid grid-cols-1 gap-6 self-stretch py-4 sm:grid-cols-2 lg:flex lg:flex-col lg:justify-around lg:gap-0">
          {/* Experience */}
          <div className="flex items-center justify-end gap-3">
            <div className="flex flex-col items-end">
              <h3 className="text-3xl font-bold italic sm:text-4xl">
                <CountUp end={5} suffix="+" />
              </h3>
              <p className="text-center text-sm text-gray-500">
                Months of Development Experience
              </p>
            </div>
            <FaBriefcase className="text-5xl text-gray-400 sm:text-6xl" />
          </div>

          {/* Featured Projects */}
          <div className="flex items-center justify-end gap-10">
            <div className="flex flex-col items-end">
              <h3 className="text-3xl font-bold italic sm:text-4xl">
                <CountUp end={2} pad={2} />
              </h3>
              <p className="text-center text-sm text-gray-500">
                Featured Projects
              </p>
            </div>
            <FaFolderOpen className="text-5xl text-gray-400 sm:text-6xl" />
          </div>

          {/* Technology */}
          <div className="flex items-center justify-end gap-10">
            <div className="flex flex-col items-end">
              <h3 className="text-3xl font-bold italic sm:text-4xl">MERN</h3>
              <p className="text-center text-sm text-gray-500">
                Core Development Stack
              </p>
            </div>
            <FaCode className="text-5xl text-gray-400 sm:text-6xl" />
          </div>

          {/* Core Technologies */}
          <div className="flex items-center justify-end gap-10">
            <div className="flex flex-col items-end">
              <h3 className="text-3xl font-bold italic sm:text-4xl">
                <CountUp end={7} pad={2} suffix="+" />
              </h3>
              <p className="text-center text-sm text-gray-500">
                Technologies & Tools
              </p>
            </div>
            <FaLaptopCode className="text-5xl text-gray-400 sm:text-6xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
