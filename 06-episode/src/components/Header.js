import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center border-b border-gray-300 px-6 py-4 shadow-sm">
      {/* Logo / Brand */}
      <h1 className="text-2xl font-bold text-indigo-700">Portfolio</h1>

      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-4 font-bold text-lg">
          <li>
            <Link
              to="/"
              className="px-3 py-1 rounded-md hover:bg-orange-200 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="px-3 py-1 rounded-md hover:bg-orange-200 transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className="px-3 py-1 rounded-md hover:bg-orange-200 transition"
            >
              Skills
            </Link>
          </li>
         {/* <li>
            <Link
              to="/services"
              className="px-3 py-1 rounded-md hover:bg-orange-200 transition"
            >
              Services
            </Link>
          </li> */}
          <li>
            <Link
              to="/projects"
              className="px-3 py-1 rounded-md hover:bg-orange-200 transition"
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
