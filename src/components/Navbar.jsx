import { useState, useEffect, useRef } from "react";
import { Turn as Hamburger } from "hamburger-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="sticky top-0 z-50 m-auto mt-3 flex w-full max-w-[1600px] items-center justify-between rounded-md border-2 border-stone-300 bg-white p-4 px-4 shadow-md">
        <div className="block text-2xl md:text-3xl">Arc Design</div>

        <button ref={buttonRef} onClick={toggleMenu} className="z-50 md:hidden">
          <Hamburger size={40} toggled={isMenuOpen} />
        </button>

        {/* Desktop Menu */}
        <ul className="mx-2 hidden items-center justify-evenly text-sm sm:w-[300px] sm:text-2xl md:flex md:w-[500px]">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`fixed right-0 top-0 h-full w-64 bg-white shadow-lg duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } z-40 md:hidden`}
        >
          <ul className="flex h-full flex-col items-center justify-center space-y-6 text-xl">
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={toggleMenu}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Overlay for mobile menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
            onClick={toggleMenu}
          ></div>
        )}
      </div>
    </>
  );
}

export default Navbar;
