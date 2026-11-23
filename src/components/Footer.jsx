import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const services = [
  { label: "Website Development", slug: "website-development" },
  { label: "Front-End Development", slug: "front-end-development" },
  { label: "Back-End Development", slug: "back-end-development" },
  { label: "Responsive Web Design", slug: "responsive-web-design" },
  { label: "Website Maintenance", slug: "website-maintenance" },
];

const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Fiverr", href: "#" },
  { label: "Upwork", href: "#" },
  { label: "Email", href: "mailto:youremail@gmail.com" },
];

function Footer() {
  return (
    <footer className="bg-[#262626] px-5 pt-12 text-white sm:px-8 lg:px-20 lg:pt-16">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <h3 className="text-3xl font-[Recoleta]">Kashif Altaf</h3>
          <p className="mt-1 text-xs text-gray-300">
            Professional Web Developer
          </p>
          <p className="mt-4 max-w-xs text-[11px] font-semibold leading-5 text-gray-400">
            I build modern, responsive, and user-friendly websites that combine
            clean code with beautiful design. My goal is to turn your ideas into
            fast, reliable digital experiences.
          </p>
          <p className="mt-8 text-[11px] text-gray-300">
            "Building modern digital experiences with clean code and creative
            thinking."
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {quickLinks.map(({ label, to }) => (
              <li key={label}>
                <Link to={to} className="hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-lg font-semibold">My Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {services.map(({ label, slug }) => (
              <li key={slug}>
                <Link to={`/services#${slug}`} className="hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-lg font-semibold">Connect With Me</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {socials.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-4 border-t border-white/10 py-6 text-[11px] text-gray-400 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright © 2026 Kashif Altaf. All Rights Reserved.</p>
        <div className="flex gap-6">
          <span>Terms & Condition</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
