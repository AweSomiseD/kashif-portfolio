import { FaPlus } from "react-icons/fa";
import Reveal from "../Reveal";

const faqs = [
  {
    q: "How do we get started?",
    a: "Send me a message with your idea or requirements. I'll reply with questions, a rough plan, and what I need from you, then we agree on scope before any work begins.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on the size. A simple website takes much less time than a full web application with authentication and payments. I give you a realistic timeline after understanding your requirements.",
  },
  {
    q: "Will my website work on mobile phones?",
    a: "Yes. Every website I build is responsive and tested on different screen sizes.",
  },
  {
    q: "Do you provide support after delivery?",
    a: "Yes. I help with fixes and improvements after launch, and you can also hire me for ongoing maintenance.",
  },
  {
    q: "How will we communicate?",
    a: "Through Fiverr & Upwork chat or email, with regular updates so you always know the progress.",
  },
];

function FaqSection() {
  return (
    <section className="bg-[#f0f1f3] px-4 py-12 sm:px-8 lg:px-20 lg:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-[Recoleta] sm:text-4xl lg:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500">
            Quick answers to common questions before we start working together.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map(({ q, a }, i) => (
            <Reveal key={q} delay={i * 80}>
              <details className="group rounded-xl bg-white p-5 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold [&::-webkit-details-marker]:hidden">
                  {q}
                  <FaPlus className="shrink-0 text-xs transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <p className="mt-3 text-sm leading-6 text-gray-500">{a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
