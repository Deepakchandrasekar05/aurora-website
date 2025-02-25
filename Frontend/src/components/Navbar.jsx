import { Link } from "react-router-dom";
import { Rocket } from "lucide-react";
import logo from "../assets/aurora_written.png"; // Adjust the path as needed

function Navbar() {
  return (
    <nav className="fixed w-full z-50 border-b border-gray-800 h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Aurora Logo" className="h-12" />{" "}
            {/* Increased size */}
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
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
