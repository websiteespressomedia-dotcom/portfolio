import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-white py-6 text-amber-950  top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

        {/* Logo/Title */}
        <div className="text-2xl font-normal tracking-wide font-times-cond">
          Espresso Media
        </div>

        {/* CONTACT BUTTON */}
        <button
          className="text-[18px] font-normal tracking-wide px-4 py-2 rounded-md bg-[#5a3e2e] text-white hover:bg-[#472f23] transition font-times-cond"
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;