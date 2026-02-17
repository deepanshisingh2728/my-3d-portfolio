import { useState } from "react";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <div
        className="fixed top-0 left-0 w-full h-16 z-50 backdrop-blur-xl
        bg-gradient-to-r from-[#2a0845]/80 via-[#5f1b7a]/80 to-[#8b2f5f]/80
        border-b border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.45)]"
      >
        <div className="max-w-7xl mx-auto h-full px-6 flex justify-between items-center">
          
          {/* LOGO */}
          <h1 className="text-white text-xl font-bold tracking-wide">
            Deepanshi
          </h1>

          {/* MOBILE MENU BUTTON */}
          <button onClick={() => setIsOpen(true)} className="sm:hidden">
            <img
              src={menuIcon}
              className="w-6 h-6 brightness-0 invert"
              alt="menu"
            />
          </button>

          {/* DESKTOP MENU */}
          <div className="hidden sm:flex gap-10 text-white font-medium">
            <a className="hover:text-pink-400 transition" href="#home">Home</a>
            <a className="hover:text-pink-400 transition" href="#about">About</a>
            <a className="hover:text-pink-400 transition" href="#work">Work</a>
            <a className="hover:text-pink-400 transition" href="#contact">Contact</a>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed inset-0 z-50 backdrop-blur-xl bg-[#14051f]/90 flex flex-col">
          
          <div className="flex justify-between items-center px-6 h-16 border-b border-white/10">
            <h1 className="text-white text-xl font-bold">Deepanshi</h1>
            <button onClick={() => setIsOpen(false)}>
              <img
                src={closeIcon}
                className="w-6 h-6 brightness-0 invert"
                alt="close"
              />
            </button>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center gap-10 text-white text-2xl">
            <a onClick={() => setIsOpen(false)} className="hover:text-pink-400" href="#home">Home</a>
            <a onClick={() => setIsOpen(false)} className="hover:text-pink-400" href="#about">About</a>
            <a onClick={() => setIsOpen(false)} className="hover:text-pink-400" href="#work">Work</a>
            <a onClick={() => setIsOpen(false)} className="hover:text-pink-400" href="#contact">Contact</a>
          </div>

        </div>
      )}
    </>
  );
};

export default Navbar;
