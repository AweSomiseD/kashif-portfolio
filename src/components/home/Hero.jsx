import { FaArrowDownLong } from "react-icons/fa6";

function Hero() {
  return (
    <section className="hero-section flex min-h-[calc(100svh-72px)] flex-col items-center bg-linear-to-b from-white to-[#f0f1f3] px-4 pt-10 pb-12 text-center sm:px-6 sm:pt-14 md:min-h-[calc(100svh-72px)] md:px-10 md:pt-20 lg:min-h-[calc(100vh-80px)] lg:pt-20 lg:pb-0 dark:from-[#0a0a0a] dark:to-[#1a1a1a]">
      {/* Introduction */}
      <div className="w-full max-w-88 space-y-3 sm:max-w-xl md:max-w-3xl md:space-y-4 lg:max-w-none lg:space-y-2">
        <h1
          className="hero-line font-[Recoleta] text-[1.65rem] leading-[1.15] tracking-tight min-[400px]:text-[1.85rem] sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.1s" }}
        >
          Hey, It's Kashif Altaf.
        </h1>

        <h2
          className="hero-line font-[Recoleta] text-[1.65rem] leading-[1.15] tracking-tight min-[400px]:text-[1.85rem] sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.3s" }}
        >
          Full-Stack Web Developer
        </h2>

        <p
          className="hero-line text-sm tracking-wide text-gray-500 sm:text-lg md:text-xl lg:text-xl"
          style={{ animationDelay: "0.5s" }}
        >
          Specializing in MERN Stack Development
        </p>

        <h2
          className="hero-line font-[Recoleta] text-[1.65rem] leading-[1.15] tracking-tight min-[400px]:text-[1.85rem] sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.7s" }}
        >
          Based on Jhelum Pakistan
        </h2>
      </div>

      {/* Scroll Button */}
      <a
        href="#profile"
        className="group mt-10 flex h-24 w-24 flex-col items-center justify-center gap-1.5 rounded-full bg-white text-center text-sm transition-transform duration-300 hover:scale-105 sm:mt-12 sm:h-28 sm:w-28 sm:text-base md:mt-14 md:h-32 md:w-32 md:text-lg lg:mt-12 lg:h-38 lg:w-38 lg:-translate-y-9 dark:border dark:border-white/20 dark:bg-[#262626]!"
      >
        <span className="font-[Recoleta]">Scroll Down</span>
        <FaArrowDownLong className="text-lg transition-transform duration-300 group-hover:translate-y-1.5 md:text-xl" />
      </a>
    </section>
  );
}

export default Hero;
