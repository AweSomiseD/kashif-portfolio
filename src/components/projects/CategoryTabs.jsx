function CategoryTabs({ categories, active, onChange }) {
  return (
    <div
      className="hero-line flex flex-wrap justify-center gap-2 sm:gap-3"
      style={{ animationDelay: "0.45s" }}
    >
      {categories.map((category) => {
        const isActive = category === active;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            aria-pressed={isActive}
            className={`cursor-pointer rounded-full border px-3 py-2 text-xs transition-colors duration-300 sm:px-5 sm:text-sm ${
              isActive
                ? "border-transparent bg-black text-white"
                : "border-gray-300 bg-white text-gray-600 hover:border-gray-500 dark:border-gray-700 dark:hover:border-gray-500"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryTabs;
