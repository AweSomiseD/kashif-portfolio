import { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProjectIdea() {
  const ref = useRef(null);
  const [play, setPlay] = useState(false);

  // Jab ye hissa screen par aaye tab animation start ho
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlay(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white px-4 py-12 sm:px-8 lg:px-20 lg:py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16">
        <div className="max-w-md">
          <h2 className="text-3xl leading-tight font-[Recoleta] sm:text-4xl lg:text-4xl">
            Have a Project Idea. Get in touch and let's chat!
          </h2>
          <p className="mt-4 text-sm leading-6 text-gray-600">
            Have an idea for a website or a digital project? Let's turn your
            vision into reality! Get in touch to discuss your goals, explore
            creative solutions, and build something amazing together. I'm always
            excited to collaborate on new ideas and bring meaningful digital
            experiences to life.
          </p>
          <Link
            to="/contact"
            className="group mt-6 inline-flex items-center gap-2 bg-black px-5 py-2.5 text-lg text-white transition-opacity hover:opacity-80"
          >
            Let's Work Together{" "}
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>

        {/* Platforms */}
        <div
          ref={ref}
          className={`flex w-full max-w-96 shrink-0 flex-col items-center ${play ? "draw-play" : ""}`}
        >
          {/* Text */}
          <p
            className="fade-up text-xl italic"
            style={{
              fontFamily: "'Caveat', 'Segoe Script', cursive",
              animationDelay: "1s",
            }}
          >
            Click to view my profile
          </p>

          {/* Two arrows: one to each platform (aligned to the centers of the two links) */}
          <svg
            viewBox="0 0 300 80"
            className="w-full text-gray-800"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {/* Left arrow -> fiverr */}
            <path
              className="draw-path"
              pathLength="1"
              d="M150 4 C 150 40, 75 28, 75 66"
              style={{ animationDelay: "1.5s" }}
            />
            <path
              className="draw-path"
              pathLength="1"
              d="M64 54 L75 70 L86 54"
              style={{ animationDelay: "2.3s", animationDuration: "0.4s" }}
            />

            {/* Right arrow -> upwork */}
            <path
              className="draw-path"
              pathLength="1"
              d="M150 4 C 150 40, 225 28, 225 66"
              style={{ animationDelay: "1.7s" }}
            />
            <path
              className="draw-path"
              pathLength="1"
              d="M214 54 L225 70 L236 54"
              style={{ animationDelay: "2.5s", animationDuration: "0.4s" }}
            />
          </svg>

          {/* Platform links, each with a hand-drawn circle */}
          <div className="flex w-full">
            {/* Fiverr */}
            <a
              href="https://www.fiverr.com/your-username"
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 justify-center transition-opacity hover:opacity-70"
            >
              <span className="relative inline-block px-8 py-4 text-2xl font-bold">
                fiverr.
                <svg
                  viewBox="0 0 200 80"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  fill="none"
                  stroke="#1dbf73"
                  strokeWidth="3"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path
                    className="draw-path"
                    pathLength="1"
                    vectorEffect="non-scaling-stroke"
                    d="M30 45 C 20 10, 170 2, 188 36 C 200 68, 60 80, 18 52 C 5 30, 60 6, 130 8"
                    style={{
                      animationDelay: "0.1s",
                      animationDuration: "1.1s",
                    }}
                  />
                </svg>
              </span>
            </a>

            {/* Upwork */}
            <a
              href="https://www.upwork.com/freelancers/your-profile-id"
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 justify-center transition-opacity hover:opacity-70"
            >
              <span className="relative inline-block px-8 py-4 text-2xl font-bold">
                upwork
                <svg
                  viewBox="0 0 200 80"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  fill="none"
                  stroke="#14a800"
                  strokeWidth="3"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path
                    className="draw-path"
                    pathLength="1"
                    vectorEffect="non-scaling-stroke"
                    d="M30 45 C 20 10, 170 2, 188 36 C 200 68, 60 80, 18 52 C 5 30, 60 6, 130 8"
                    style={{
                      animationDelay: "0.5s",
                      animationDuration: "1.1s",
                    }}
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectIdea;
