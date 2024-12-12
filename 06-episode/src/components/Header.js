import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between items-center border border-black">
      <div>
        <h1 className="text-2xl font-bold">Portfolio</h1>
      </div>
      <div className="p-4">
        <ul className="flex font-bold">
          <Link>
            <li className="m-3 bg-orange-200 cursor-pointer py-1 px-2 rounded-md text-lg">
              Home
            </li>
          </Link>
          <li className="m-3 hover:bg-orange-200 cursor-pointer py-1 px-2 rounded-md text-lg">
            <Link to="/about">About</Link>
          </li>
          <li className="m-3 hover:bg-orange-200 cursor-pointer  py-1 px-2 rounded-md text-lg">
            <Link to="/skills">Skills</Link>
          </li>
          <li className="m-3 hover:bg-orange-200 cursor-pointer py-1 px-2 rounded-md text-lg">
            <Link to="/services">Services</Link>
          </li>
          <li className="m-3 hover:bg-orange-200 cursor-pointer font-bold py-1 px-2 rounded-md text-lg">
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
