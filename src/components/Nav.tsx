import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="flex w-full items-center justify-between gap-3 bg-blue-950 px-3 py-3 text-white sm:px-6 sm:py-2 md:px-10">
      <div className="flex shrink-0 items-center gap-2">
        <FaGithub className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10" />
        <p className="text-base font-bold sm:text-lg md:text-xl">
          Github Finder
        </p>
      </div>

      <div className="flex items-center gap-3 whitespace-nowrap text-xs font-semibold sm:gap-4 sm:text-base md:gap-8 md:text-lg">
        <Link to="/">Home</Link>
        <Link to="/favorite">Favorite</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default Nav;