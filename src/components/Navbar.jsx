import { Link } from 'react-router-dom';
import { FaHome, FaFilm, FaEnvelope } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <ul className="flex space-x-4 text-white">
        <li className="flex items-center">
          <FaHome className="mr-2" />
          <Link to="/">Home</Link>
        </li>
        <li className="flex items-center">
          <FaFilm className="mr-2" />
          <Link to="/film">Film</Link>
        </li>
        <li className="flex items-center">
          <FaEnvelope className="mr-2" />
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="text-white font-bold">
        TEAZ Cinema
      </div>
    </nav>
  );
};

export default NavBar;
