import { NavLink } from "react-router-dom";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaBars,
  FaXmark,
} from "react-icons/fa6";
import ThemeToggle from "./ThemeToggle";

function Navbar({ menuOpen, onMenuOpenChange }) {
  const navLinkStyle = ({ isActive }) =>
    `text-sm transition-all duration-200 nav-link ${
      isActive ? "active font-bold text-black" : "text-gray-400"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-[#0a0a0a]">
      <nav className="relative mx-auto flex max-w-360 items-center justify-between px-4 py-4 sm:px-6 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-10 lg:py-6 xl:mx-20 xl:px-0">
        {/* Left: Navigation */}
        <ul className="hidden items-center gap-6 lg:flex">
          <li>
            <NavLink to="/" end className={navLinkStyle}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={navLinkStyle}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/projects" className={navLinkStyle}>
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink to="/services" className={navLinkStyle}>
              Services
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={navLinkStyle}>
              Contact
            </NavLink>
          </li>
          <ThemeToggle />
        </ul>

        {/* Center: Brand Identity */}
        <div className="flex flex-col items-start text-left lg:items-center lg:text-center">
          <NavLink
            to="/"
            className="text-xl font-bold tracking-tight text-black"
            onClick={() => onMenuOpenChange(false)}
          >
            Kashif Altaf
          </NavLink>

          <p className="hidden text-xs text-gray-500 sm:block lg:block">
            Professional Web Developer
          </p>
        </div>

        {/* Right: Social Icons */}
        <ul className="hidden items-center justify-end gap-5 lg:flex">
          <li>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-500 hover:text-black"
            >
              <FaInstagram size={17} />
            </a>
          </li>

          <li>
            <a
              href="#"
              aria-label="X"
              className="text-gray-500 hover:text-black"
            >
              <FaXTwitter size={17} />
            </a>
          </li>

          <li>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-500 hover:text-black"
            >
              <FaLinkedinIn size={17} />
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          onClick={() => onMenuOpenChange((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 lg:hidden dark:border-gray-700 dark:text-gray-200"
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>

        {menuOpen && (
          <div className="absolute left-0 right-0 top-full border-t border-gray-200 bg-white px-4 py-5 shadow-lg lg:hidden dark:border-gray-800 dark:bg-[#0a0a0a]">
            <ul className="mx-auto flex max-w-md flex-col gap-1">
              {[
                ["/", "Home"],
                ["/about", "About"],
                ["/projects", "Projects"],
                ["/services", "Services"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === "/"}
                    className={({ isActive }) =>
                      `block rounded-lg px-4 py-3 text-sm ${isActive ? "bg-[#f0f1f3] font-bold text-black dark:bg-[#1a1a1a] dark:text-white" : "text-gray-600 dark:text-gray-300"}`
                    }
                    onClick={() => onMenuOpenChange(false)}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
              <li className="mt-2 border-t border-gray-200 px-4 pt-4 dark:border-gray-800">
                <ThemeToggle />
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
