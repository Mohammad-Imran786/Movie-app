import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Navbar = () => {

  return (
    <nav className="absolute top-8 left-12 z-20">
      <div className="flex items-center space-x-8 text-gray-300">
        <Link to="/" className="flex items-center space-x-2 hover:text-gray-400 text-lg font-semibold">
          <FaHome size={24} />
          <span>Home</span>
        </Link>

        <Link to="/mylist" className="hover:text-gray-400 text-lg font-semibold">
          My List
        </Link>
      </div>
    </nav>
  )
};

export default Navbar;
