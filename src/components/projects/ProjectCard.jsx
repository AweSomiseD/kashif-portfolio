import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegImage, FaArrowRight } from "react-icons/fa";

function ProjectCard({ project }) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = project.cover && !imageFailed;

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md transition-transform duration-300 hover:-translate-y-1"
    >
      {/* Cover (grey placeholder if empty or the image fails to load) */}
      <div className="flex aspect-16/10 items-center justify-center overflow-hidden bg-[#d9d9d9]">
        {showImage ? (
          <img
            src={project.cover}
            alt={`${project.title} screenshot`}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <FaRegImage className="text-5xl text-white transition-transform duration-500 group-hover:scale-110" />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] uppercase tracking-widest text-gray-500">
          {project.category}
        </p>
        <h3 className="mt-1 text-xl font-[Recoleta]">{project.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
          {project.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-gray-300 px-3 py-1 text-[11px] text-gray-600 dark:border-gray-700"
            >
              {t}
            </span>
          ))}
        </div>

        <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm">
          View project
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
        </span>
      </div>
    </Link>
  );
}

export default ProjectCard;
