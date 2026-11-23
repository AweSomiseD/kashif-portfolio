import { useState } from "react";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import ProjectsHero from "../components/projects/ProjectsHero";
import CategoryTabs from "../components/projects/CategoryTabs";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectIdea from "../components/home/ProjectIdea";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";

const categories = [
  "All",
  "Full-Stack",
  "React",
  "Landing Pages",
  "JavaScript",
];

function Projects() {
  const [active, setActive] = useState("All");

  const visibleProjects =
    active === "All"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <>
      <ProjectsHero />

      <section className="bg-[#f0f1f3] px-4 pb-16 pt-4 sm:px-8 lg:px-20 lg:pb-20">
        <div className="mx-auto max-w-5xl">
          <CategoryTabs
            categories={categories}
            active={active}
            onChange={setActive}
          />

          {/* key={active} replays the fade-in every time the tab changes */}
          <div
            key={active}
            className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {visibleProjects.map((project, i) => (
              <Reveal
                key={project.slug}
                delay={(i % 3) * 150}
                className="h-full"
              >
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          {visibleProjects.length === 0 && (
            <p className="mt-10 text-center text-sm text-gray-500">
              No projects in this category yet.
            </p>
          )}

          {/* More on GitHub */}
          <div className="mt-16 text-center">
            <p className="text-sm text-gray-600">
              Want to see more of my code?
            </p>
            <a
              href="https://github.com/AweSomiseD"
              target="_blank"
              rel="noreferrer"
              className="group mt-4 inline-flex items-center gap-2 bg-black px-5 py-2.5 text-sm text-white transition-opacity hover:opacity-80"
            >
              <FaGithub className="text-base" />
              More projects on GitHub
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </div>
        </div>
      </section>

      <ProjectIdea />
    </>
  );
}

export default Projects;
