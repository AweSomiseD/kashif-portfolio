import { FaCode, FaComments, FaClock, FaLifeRing } from "react-icons/fa";
import Reveal from "../Reveal";

const values = [
  {
    title: "Clean Code",
    text: "Readable, organized code that is easy to maintain and extend.",
    icon: FaCode,
    card: "bg-[#e3eeff]",
    iconBox: "bg-[#c4dafc] text-[#2563eb]",
  },
  {
    title: "Clear Communication",
    text: "Regular updates and honest answers, so you always know the status.",
    icon: FaComments,
    card: "bg-[#fde8e8]",
    iconBox: "bg-[#f8c9c9] text-[#c0392b]",
  },
  {
    title: "On-Time Delivery",
    text: "Realistic timelines that I plan carefully and stick to.",
    icon: FaClock,
    card: "bg-[#ece8ff]",
    iconBox: "bg-[#d3cbfa] text-[#6d4ed8]",
  },
  {
    title: "Post-Launch Support",
    text: "I stay available after delivery for fixes and improvements.",
    icon: FaLifeRing,
    card: "bg-[#fff0e0]",
    iconBox: "bg-[#fbd9ae] text-[#d97706]",
  },
];

function ValuesSection() {
  return (
    <section className="bg-[#f0f1f3] px-4 py-12 sm:px-8 lg:px-20 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-3xl font-[Recoleta] sm:text-4xl lg:text-4xl">How I Work</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500">
            The principles behind every project I take on.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-6">
          {values.map(({ title, text, icon: Icon, card, iconBox }, i) => (
            <Reveal key={title} delay={i * 150} className="h-full">
              <div
                className={`keep-colors h-full rounded-xl p-5 shadow-md transition-transform duration-300 hover:-translate-y-1 ${card}`}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg text-lg ${iconBox}`}
                >
                  <Icon />
                </div>
                <h3 className="mt-5 text-sm font-semibold">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-gray-600">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValuesSection;
