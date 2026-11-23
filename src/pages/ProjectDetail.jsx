import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaGithub,
  FaRegImage,
} from "react-icons/fa";
import Reveal from "../components/Reveal";
import ProjectIdea from "../components/home/ProjectIdea";
import { projects } from "../data/projects";

const blackButton =
  "group inline-flex items-center gap-2 bg-black px-5 py-2.5 text-sm text-white transition-opacity hover:opacity-80";
const outlineButton =
  "inline-flex items-center gap-2 border border-gray-300 px-5 py-2.5 text-sm text-gray-700 transition-opacity hover:opacity-70 dark:border-gray-700";
const techTag =
  "rounded-full border border-gray-300 px-3 py-1 text-[11px] text-gray-600 dark:border-gray-700";

// Accepts a full YouTube link or just the 11 character video id
function getYoutubeId(value) {
  if (!value) return "";
  const match = value.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/);
  if (match) return match[1];
  return /^[\w-]{11}$/.test(value.trim()) ? value.trim() : "";
}

function Cover({ project }) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = project.cover && !imageFailed;

  return (
    <div className="flex aspect-16/10 items-center justify-center overflow-hidden rounded-xl bg-[#d9d9d9]">
      {showImage ? (
        <img
          src={project.cover}
          alt={project.title}
          onError={() => setImageFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <FaRegImage className="text-7xl text-white" />
      )}
    </div>
  );
}

// A broken screenshot is simply hidden
function Screenshot({ src, alt }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="w-full rounded-xl object-cover shadow-md"
    />
  );
}

function ProjectContent({ project }) {
  const index = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(index + 1) % projects.length];
  const videoId = getYoutubeId(project.video);
  const hasScreenshots = project.screenshots.length > 0;
  const hasFeatures = project.features.length > 0;

  return (
    <>
      {/* Header */}
      <section className="bg-linear-to-b from-white to-[#f0f1f3] px-4 pb-10 pt-12 sm:px-8 lg:px-20 lg:pb-12 lg:pt-16 dark:from-[#0a0a0a] dark:to-[#1a1a1a]">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/projects"
            className="hero-line inline-flex items-center gap-2 text-sm text-gray-500 hover:underline"
          >
            <FaArrowLeft className="text-xs" />
            All projects
          </Link>

          <p
            className="hero-line mt-8 text-xs uppercase tracking-widest text-gray-500"
            style={{ animationDelay: "0.1s" }}
          >
            {project.category}
          </p>
          <h1
            className="hero-line mt-2 text-3xl font-[Recoleta] leading-tight sm:text-4xl lg:text-5xl"
            style={{ animationDelay: "0.2s" }}
          >
            {project.title}
          </h1>
          <p
            className="hero-line mt-4 max-w-2xl text-base leading-7 text-gray-600"
            style={{ animationDelay: "0.3s" }}
          >
            {project.summary}
          </p>

          <div
            className="hero-line mt-8 flex flex-wrap gap-3"
            style={{ animationDelay: "0.4s" }}
          >
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className={blackButton}
              >
                Live Demo
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className={outlineButton}
              >
                <FaGithub />
                {project.githubBackend ? "GitHub Frontend" : "GitHub"}
              </a>
            )}
            {project.githubBackend && (
              <a
                href={project.githubBackend}
                target="_blank"
                rel="noreferrer"
                className={outlineButton}
              >
                <FaGithub />
                GitHub Backend
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Cover + note */}
      <section className="bg-[#f0f1f3] px-4 pb-12 sm:px-8 lg:px-20 lg:pb-16">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Cover project={project} />
          </Reveal>

          {project.note && (
            <Reveal delay={100}>
              <div className="mt-6 rounded-xl bg-white p-5 shadow-md">
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Note
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {project.note}
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Overview, features, tech, media, challenges */}
      <section className="bg-white px-4 py-12 sm:px-8 lg:px-20 lg:py-16">
        <div className="mx-auto max-w-5xl space-y-14">
          <Reveal>
            <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
              <div>
                <h2 className="text-3xl font-[Recoleta]">Overview</h2>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {project.summary}
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-[Recoleta]">Tech used</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className={techTag}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {hasFeatures && (
            <Reveal>
              <div>
                <h2 className="text-3xl font-[Recoleta]">Key features</h2>
                <ul className="mt-4 grid gap-3 md:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-6 text-gray-600"
                    >
                      <FaCheck className="mt-1.5 shrink-0 text-xs text-gray-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}

          {hasScreenshots && (
            <Reveal>
              <div>
                <h2 className="text-3xl font-[Recoleta]">Screenshots</h2>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {project.screenshots.map((src, i) => (
                    <Screenshot
                      key={src}
                      src={src}
                      alt={`${project.title} screenshot ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          )}

          {videoId && (
            <Reveal>
              <div>
                <h2 className="text-3xl font-[Recoleta]">Demo video</h2>
                <div className="mt-4 aspect-video overflow-hidden rounded-xl bg-[#d9d9d9]">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                    title={`${project.title} demo video`}
                    allow="accelerometer; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
              </div>
            </Reveal>
          )}

          {project.challenges && (
            <Reveal>
              <div className="keep-colors rounded-xl bg-[#fff0e0] p-8">
                <p className="text-2xl font-[Recoleta]">
                  Challenges and what I learned
                </p>
                <p className="mt-3 whitespace-pre-line text-sm leading-7">
                  {project.challenges}
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Next project */}
      {projects.length > 1 && (
        <section className="bg-[#f0f1f3] px-4 py-12 sm:px-8 lg:px-20 lg:py-16">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <Link
                to={`/projects/${nextProject.slug}`}
                className="group block"
              >
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Next project
                </p>
                <div className="mt-2 flex items-center gap-4">
                  <h2 className="text-3xl font-[Recoleta] sm:text-4xl lg:text-4xl">
                    {nextProject.title}
                  </h2>
                  <FaArrowRight className="text-2xl transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
                <p className="mt-2 max-w-xl text-sm leading-6 text-gray-600">
                  {nextProject.summary}
                </p>
              </Link>
            </Reveal>
          </div>
        </section>
      )}
    </>
  );
}

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="bg-[#f0f1f3] px-4 py-20 text-center sm:px-8 lg:px-20 lg:py-32">
        <h1 className="text-5xl font-[Recoleta]">Project not found</h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-gray-600">
          This project does not exist or the link is wrong.
        </p>
        <Link to="/projects" className={`${blackButton} mt-8`}>
          Back to all projects
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
        </Link>
      </section>
    );
  }

  return (
    <>
      {/* key resets image state when the user moves to another project */}
      <ProjectContent key={project.slug} project={project} />
      <ProjectIdea />
    </>
  );
}

export default ProjectDetail;
