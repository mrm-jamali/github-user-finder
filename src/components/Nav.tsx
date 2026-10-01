import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="bg-blue-950 text-white flex justify-between items-center px-10 py-3 sm:px-6 md:px-10  sm:py-1 md:py-2">
      <div className="flex items-center gap-2">
        <FaGithub size={40}  className="sm:w-9 sm:h-9 md:w-10 md:h-10" />
        <p className="text-xl font-bold  sm:text-lg md:text-xl">Github Finder</p>
      </div>
    <div className="flex gap-15 sm:gap-4 md:gap-16 text-sm sm:text-base md:text-lg font-semibold">
  <Link to="/">Home</Link>
  <Link to="/favorite">Favorite</Link>
  <Link to="/about">About</Link>
</div>
    </div>
  );
}

export default Nav;
