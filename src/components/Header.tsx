import { FaGithub } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

function Header() {
  return (
   <div className="flex justify-center items-center flex-col gap-4 bg-gradient-to-br from-blue-950 via-blue-800 to-blue-500 text-white py-10 sm:py-6 md:py-10">
      <div className="flex justify-center items-center flex-col gap-4 text-white">
        <FaGithub size={60} />
        <h2 className="text-4xl font-bold">Find Github Users</h2>
        <p className="font-semibold text-center text-xm sm:text-base">
          Search for any github Users and explore their profile,re positories
          and followers and more!
        </p>
   <div className="w-full px-4 sm:px-6 md:px-0">
  <div className="flex w-full max-w-xl mx-auto">
    <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-l-lg px-3 py-2 flex-1 min-w-0">
      <FiSearch size={22} className="text-gray-500 shrink-0" />

      <input
        type="text"
        placeholder="Search for Users"
        className="w-full min-w-0 outline-none text-gray-700 placeholder:text-gray-400"
      />
    </div>

 <button
  className="bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800
  text-white font-semibold px-5 sm:px-7 py-2
  rounded-r-lg shadow-md hover:shadow-lg
  transition-all duration-200 shrink-0"
>
  Search
</button>
  </div>
</div>
      </div>
    </div>
  );
}

export default Header;
