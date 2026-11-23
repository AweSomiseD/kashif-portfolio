function ProjectsHero() {
  return (
    <section className="bg-linear-to-b from-white to-[#f0f1f3] px-4 pb-12 pt-12 text-center sm:px-8 lg:px-20 lg:pb-16 lg:pt-20 dark:from-[#0a0a0a] dark:to-[#1a1a1a]">
      <p className="hero-line text-xs uppercase tracking-widest text-gray-500">
        Projects
      </p>
      <h1
        className="hero-line mt-2 text-3xl font-[Recoleta] leading-tight sm:text-5xl lg:text-6xl"
        style={{ animationDelay: "0.15s" }}
      >
        Things I've built
      </h1>
      <p
        className="hero-line mx-auto mt-5 max-w-2xl text-base leading-6 text-gray-600 sm:text-lg sm:leading-7"
        style={{ animationDelay: "0.3s" }}
      >
        Full-stack apps, React frontends and landing pages. Open any project to
        see what it does, the tech behind it, and its source code on GitHub.
      </p>
    </section>
  );
}

export default ProjectsHero;
