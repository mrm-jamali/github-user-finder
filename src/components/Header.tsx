import { FaGithub } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

type HeaderProps = {
  search: string;
  setSearch: (value: string) => void;
  submittedSearch: string;
  setSubmittedSearch: (value: string) => void;
};

function Header({ search, setSearch, setSubmittedSearch }: HeaderProps) {
  const SearchHandler = () => {
    setSubmittedSearch(search);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-blue-950 via-blue-800 to-blue-500 px-4  text-white sm:gap-5 sm:py-10">
      <div className="flex w-full flex-col items-center justify-center gap-4 text-white">
        <FaGithub className="h-12 w-12 sm:h-14 sm:w-14 md:h-[60px] md:w-[60px]" />

        <h2 className="text-center text-2xl font-bold sm:text-3xl md:text-4xl">
          Find Github Users
        </h2>

        <p className="max-w-2xl text-center text-sm font-semibold sm:text-base">
          Search for any github Users and explore their profile,repositories and
          followers and more!
        </p>

        <div className="w-full px-0 sm:px-4 md:px-0">
          <div className="mx-auto flex w-full max-w-xl">
            <div className="flex min-w-0 flex-1 items-center gap-2 rounded-l-lg border border-gray-300 bg-white px-2 py-2 sm:px-3">
              <FiSearch size={22} className="shrink-0 text-gray-500" />

              <input
                type="text"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
                placeholder="Search for Users"
                className="w-full min-w-0 text-sm text-gray-700 outline-none placeholder:text-gray-400 sm:text-base"
              />
            </div>

            <button
              onClick={SearchHandler}
              className="shrink-0 rounded-r-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-emerald-700 hover:shadow-lg active:bg-emerald-800 sm:px-6 sm:text-base"
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
