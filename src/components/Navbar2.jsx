import React from "react";

const Navbar = ({ active, setActive }) => {
  const mainCategories = [
    "3D Products Animation",
    "Social Media Strategy & Content Creation",
    "Social Media Designs",
    "Band Identity",
    "Website Development",
    "Display Branding",
  ];

  const moreCategories = [
    "360 Previews",
    "Videography",
    "Hoarding",
    "Catalogue",
    "Newspaper AD",
    "Sample Kit",
  ];

  return (
    <nav className="w-full md:sticky lg:sticky top-0 z-50 bg-[#4A2D1D] py-4 shadow-md">
      <div className="max-w-[1500px] mx-auto px-4">

        {/* MAIN CATEGORIES - scrollable on mobile */}
        <div
          className="
            flex gap-2 mb-3 flex-nowrap
            overflow-x-auto scrollbar-hide
            justify-start md:justify-center
            py-2
          "
        >
          {mainCategories.map((c, i) => (
            <button
              key={i}
              onClick={() => setActive(c)}
              className={`
                px-6 py-2 rounded-full text-sm font-normal whitespace-nowrap font-times-cond 
                transition-all duration-200
                ${
                  active === c
                    ? "italic bg-[#F2E9DD] text-[#3A241C]"
                    : "bg-[#2B1912] hover:bg-[#3A241C] text-white"
                }
              `}
            >
              {c}
            </button>
          ))}
        </div>

        {/* MORE CATEGORIES - scrollable on mobile */}
        <div
          className="
            flex gap-3 flex-nowrap
            overflow-x-auto scrollbar-hide
            justify-start md:justify-center
            py-1
          "
        >
          {moreCategories.map((c, i) => (
            <button
              key={i}
              onClick={() => setActive(c)}
              className={`
                px-7 py-2 rounded-full text-sm font-normal whitespace-nowrap font-times-cond 
                transition-all duration-200
                ${
                  active === c
                    ? "italic bg-[#F2E9DD] text-[#3A241C]"
                    : "bg-[#2B1912] hover:bg-[#3A241C] text-white"
                }
              `}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
