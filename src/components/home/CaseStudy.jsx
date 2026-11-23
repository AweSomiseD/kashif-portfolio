import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegImage, FaArrowRight } from "react-icons/fa";
import Reveal from "../Reveal";
import { projects } from "../../data/projects";

// Show only the first 3 featured projects on Home
const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

function ProjectTile({ project }) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = project.cover && !imageFailed;

  return (
    <Link to={`/projects/${project.slug}`} className="group block">
      <div className="flex aspect-4/3 items-center justify-center overflow-hidden bg-[#d9d9d9]">
        {showImage ? (
          <img
            src={project.cover}
            alt={project.title}
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <FaRegImage className="text-6xl text-white transition-transform duration-500 group-hover:scale-110" />
        )}
      </div>
      <h3 className="mt-3 text-xl font-[Recoleta]">{project.title}</h3>
    </Link>
  );
}

function CaseStudy() {
  return (
    <section className="bg-white px-4 py-12 sm:px-8 lg:px-20 lg:py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-medium font-[Recoleta] sm:text-4xl lg:font-semibold">
          Recent Case Study
        </h2>
        <p className="mt-2 max-w-xs text-xs font-semibold leading-5 text-gray-600">
          Explore my recent projects, where ideas turn into functional digital
          experiences. From responsive website development to performance
          optimization, each project reflects my focus on clean code, modern
          design, and user-friendly functionality.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 120}>
              <ProjectTile project={project} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-3 rounded-full bg-black px-6 py-3 text-sm text-white"
          >
            View all projects
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CaseStudy;
