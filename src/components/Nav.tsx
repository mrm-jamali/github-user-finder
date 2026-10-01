import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div>
        <FaGithub size={40} />
        <p>Github Finder</p>
      </div>
      <div>
    
         <Link to="/">Home</Link>
  <Link to="/favorite">Favorite</Link>
  <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default Nav;
