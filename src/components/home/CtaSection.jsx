import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function CtaSection() {
  return (
    <section className="flex min-h-128 flex-col items-stretch bg-white lg:flex-row">
      {/* Left black panel (circle is anchored to its right edge) */}
      <div className="relative flex min-h-88 w-full items-center justify-center bg-black py-8 lg:w-[35%] lg:py-0">
        <div className="relative z-10 flex h-[18rem] w-[min(18rem,calc(100vw-2rem))] flex-col items-center justify-center rounded-full border-[6px] border-white bg-white px-5 text-center shadow-xl sm:h-80 sm:w-80 sm:px-12 lg:absolute lg:right-0 lg:top-1/2 lg:h-96 lg:w-96 lg:-translate-y-1/2 lg:translate-x-1/2 lg:px-14">
          <h3 className="text-lg leading-[1.2] font-[Recoleta] sm:text-2xl sm:leading-snug lg:text-2xl">
            Do you need a developer? <br /> Request a quote!
          </h3>
          <p className="mt-3 text-[0.6875rem] leading-4 text-gray-500 sm:mt-4 sm:text-sm sm:leading-5">
            Looking for a skilled developer to bring your ideas to life? Let's
            build something meaningful together. Get in touch today and let's
            turn your vision into a modern, responsive, and high-performing
            website.
          </p>
          <a
            href="mailto:youremail@gmail.com"
            className="mt-3 text-xs text-blue-500 hover:underline sm:mt-4 sm:text-sm"
          >
            youremail@gmail.com
          </a>
        </div>
      </div>

      {/* Right content */}
      <div className="flex flex-1 items-center px-5 py-12 sm:px-8 lg:py-24 lg:pl-64 lg:pr-20">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span>Front-End Developer</span>
            <span>•</span>
            <span>Back-End Developer</span>
            <span>•</span>
            <span>Freelancer</span>
          </div>

          <h2 className="mt-3 max-w-[28ch] text-3xl font-[Recoleta] leading-tight sm:text-4xl lg:text-4xl">
            I'm a passionate web developer with an eye for detail.
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-500">
            I build responsive, user-friendly websites that combine clean code
            with beautiful design. My goal is to turn your ideas into fast,
            reliable, and polished digital experiences.
          </p>

          <Link
            to="/contact"
            className="group mt-6 inline-flex items-center gap-2 bg-black px-5 py-2.5 text-lg text-white transition-opacity hover:opacity-80"
          >
            Let's Work Together{" "}
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
