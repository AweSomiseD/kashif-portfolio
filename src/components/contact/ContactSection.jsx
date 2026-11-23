import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";
import { SiFiverr, SiUpwork } from "react-icons/si";
import Reveal from "../Reveal";

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

const contactInfo = [
  {
    label: "Email",
    value: "youremail@gmail.com",
    href: "mailto:youremail@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "Location",
    value: "Jhelum, Punjab, Pakistan",
    icon: FaMapMarkerAlt,
  },
];

const socials = [
  {
    label: "Fiverr",
    href: "https://www.fiverr.com/your-username",
    icon: SiFiverr,
  },
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/your-username",
    icon: SiUpwork,
  },
  { label: "GitHub", href: "https://github.com/your-username", icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-username",
    icon: FaLinkedinIn,
  },
];

const serviceOptions = [
  { value: "website-development", label: "Website Development" },
  { value: "front-end-development", label: "Front-End Development" },
  { value: "back-end-development", label: "Back-End Development" },
  { value: "responsive-web-design", label: "Responsive Web Design" },
  { value: "website-maintenance", label: "Website Maintenance" },
  { value: "other", label: "Something else" },
];

const inputClass =
  "mt-1.5 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm outline-none transition-colors focus:border-black dark:border-gray-700 dark:focus:border-white";

function ContactSection() {
  const [searchParams] = useSearchParams();
  const serviceFromUrl = searchParams.get("service") || "";
  const validService = serviceOptions.some((s) => s.value === serviceFromUrl)
    ? serviceFromUrl
    : "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: validService,
    message: "",
    _gotcha: "",
  });

  // Agar page khula ho aur URL ki service badle (jaise footer link se), to dropdown update ho
  useEffect(() => {
    setForm((f) => ({ ...f, service: validService }));
  }, [validService]);

  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form._gotcha) return; // bot ne bhara hai, ignore
    setStatus("sending");

    // Email mein slug ki jagah readable naam jaye
    const serviceLabel =
      serviceOptions.find((s) => s.value === form.service)?.label ??
      form.service;

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ ...form, service: serviceLabel }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setForm({ name: "", email: "", service: "", message: "", _gotcha: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-white px-4 py-12 sm:px-8 lg:px-20 lg:py-20">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
        {/* Left: info */}
        <Reveal>
          <h2 className="text-2xl font-[Recoleta] sm:text-3xl lg:text-3xl">Get in touch</h2>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            The fastest way to reach me is through the form, or you can message
            me directly on Fiverr.
          </p>

          <div className="mt-8 space-y-4">
            {contactInfo.map(({ label, value, href, icon: Icon }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f0f1f3] text-lg dark:bg-[#1a1a1a]">
                  <Icon />
                </div>
                <div>
                  <p className="text-xs text-gray-500">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm font-semibold hover:underline"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-xs text-gray-500">Find me online</p>
            <div className="mt-3 flex gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-lg transition-transform duration-300 hover:-translate-y-1 dark:border-gray-700"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Right: form */}
        <Reveal delay={150}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gray-200 p-4 shadow-md sm:p-6 lg:p-8 dark:border-gray-800"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="text-xs font-semibold">
                Your Name
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className={inputClass}
                />
              </label>

              <label className="text-xs font-semibold">
                Your Email
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className={inputClass}
                />
              </label>
            </div>

            <label className="mt-5 block text-xs font-semibold">
              What do you need?
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className={`${inputClass} dark:bg-[#171717] dark:text-white`}
              >
                <option
                  value=""
                  disabled
                  className="bg-white text-black dark:bg-[#171717] dark:text-white"
                >
                  Select a service
                </option>

                {serviceOptions.map(({ value, label }) => (
                  <option
                    key={value}
                    value={value}
                    className="bg-white text-black dark:bg-[#171717] dark:text-white"
                  >
                    {label}
                  </option>
                ))}
              </select>
            </label>

            <label className="mt-5 block text-xs font-semibold">
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                minLength={10}
                rows={6}
                placeholder="Tell me about your project..."
                className={`${inputClass} resize-none`}
              />
            </label>

            {/* Honeypot: screen par nazar nahi aata */}
            <input
              type="text"
              name="_gotcha"
              value={form._gotcha}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="group mt-6 inline-flex items-center gap-2 bg-black px-6 py-3 text-sm text-white transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
              <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {status === "success" && (
              <p className="mt-4 text-sm text-green-600" role="status">
                Thank you! Your message has been sent. I'll reply soon.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-sm text-red-600" role="alert">
                Something went wrong. Please try again, or email me directly at
                youremail@gmail.com.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export default ContactSection;
