import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/aurora_written.png"; // Adjust the path as needed
import logo2 from "../assets/aurora_logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full bg-transparent backdrop-blur-sm z-50 border-b border-gray-800 ${
        scrolled ? "bg-black bg-opacity-70 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Aurora Logo" className="h-12" />
          </Link>

          <div className="flex space-x-6 text-white text-lg">
            <Link
              to="/"
              className="nav-link relative after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-[rgba(171,132,98,1)] after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </Link>
            <Link
              to="/team"
              className="nav-link relative after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-[rgba(171,132,98,1)] after:transition-all after:duration-300 hover:after:w-full"
            >
              Team
            </Link>
            <Link
              to="/challenges"
              className="nav-link relative after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-[rgba(171,132,98,1)] after:transition-all after:duration-300 hover:after:w-full"
            >
              Challenges
            </Link>
            <Link
              to="/sponsors"
              className="nav-link relative after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-[rgba(171,132,98,1)] after:transition-all after:duration-300 hover:after:w-full"
            >
              Sponsors
            </Link>
            <Link to="/">
              <img src={logo2} className="h-10 w-10 rounded-full" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;