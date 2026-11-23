function ContactHero() {
  return (
    <section className="bg-linear-to-b from-white to-[#f0f1f3] px-4 pb-12 pt-12 text-center sm:px-8 lg:px-20 lg:pb-16 lg:pt-20 dark:from-[#0a0a0a] dark:to-[#1a1a1a]">
      <p className="hero-line text-xs uppercase tracking-widest text-gray-500">
        Contact
      </p>
      <h1
        className="hero-line mt-2 text-3xl font-[Recoleta] leading-tight sm:text-5xl lg:text-6xl"
        style={{ animationDelay: "0.15s" }}
      >
        Let's talk about your project
      </h1>
      <p
        className="hero-line mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600"
        style={{ animationDelay: "0.3s" }}
      >
        Have an idea, a question, or a project in mind? Fill in the form or
        reach me directly. I'll get back to you as soon as I can.
      </p>
    </section>
  );
}

export default ContactHero;
