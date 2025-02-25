import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';

function Navbar() {
  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/assets/Aurora logo.png" className="h-8 w-8 text-purple-500" />
            <span className="text-2xl font-bold gradient-text">AURORA</span>
          </Link>
          
          <div className="flex space-x-4">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/team" className="nav-link">Team</Link>
            <Link to="/challenges" className="nav-link">Challenges</Link>
            <Link to="/sponsors" className="nav-link">Sponsors</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;