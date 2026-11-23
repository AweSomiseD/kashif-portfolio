import portrait from "../../assets/images/Portrait.png";
import Reveal from "../Reveal";

function AboutIntro() {
  return (
    <section className="bg-white px-4 pt-10 sm:px-8 lg:px-20 lg:pt-16">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 md:grid-cols-[1fr_1.3fr] lg:gap-16">
        <Reveal>
          <div className="overflow-hidden rounded-2xl bg-[#D9D9D9]">
            <img
              src={portrait}
              alt="Kashif Altaf"
              className="h-80 w-full object-cover object-top sm:h-112"
            />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="text-xs uppercase tracking-widest text-gray-500">
            About Me
          </p>
          <h1 className="mt-2 text-3xl font-[Recoleta] leading-tight sm:text-4xl md:text-5xl lg:text-5xl">
            A MERN developer who loves building things that work.
          </h1>
          <p className="mt-5 text-sm leading-7 text-gray-600">
            I'm Kashif Altaf, a MERN Stack Developer from Jhelum, Pakistan. I
            enjoy turning ideas into complete web applications, from the
            interface people see to the server and database behind it.
          </p>
          <p className="mt-3 text-sm leading-7 text-gray-600">
            I'm early in my career, but I learn fast and build real projects to
            prove it. I focus on clean code, clear communication, and delivering
            what I promise, so you always know where your project stands.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default AboutIntro;
