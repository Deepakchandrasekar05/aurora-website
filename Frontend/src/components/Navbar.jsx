import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // You can use any icon set or import SVG manually
import logo from "../assets/aurora_written.png";
import logo2 from "../assets/aurora_logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 border-b border-gray-800 transition-all duration-300 ${
        scrolled ? "bg-black bg-opacity-70 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/home" className="flex items-center space-x-2">
            <img src={logo} alt="Aurora Logo" className="h-12" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 text-white text-lg">
            {["Home", "Team","Updates", "Challenges", "Sponsors"].map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase()}`}
                className="nav-link relative after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-[rgba(171,132,98,1)] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </Link>
            ))}
            <Link to="/home">
              <img src={logo2} className="h-10 w-10 rounded-full" alt="Logo Icon" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 space-y-4 px-2 pb-4 text-white bg-black bg-opacity-80 rounded-lg shadow-md">
            {["Home", "Team","Updates", "Challenges", "Sponsors"].map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase()}`}
                className="block px-4 py-2 rounded hover:bg-gray-800 transition"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link to="/home" onClick={() => setMenuOpen(false)}>
              <img src={logo2} className="h-10 w-10 rounded-full mx-auto" alt="Logo Icon" />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
