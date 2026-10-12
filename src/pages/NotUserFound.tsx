import { Link } from "react-router-dom";
import { LuGithub, LuHouse, LuSearchX } from "react-icons/lu";

function NotUserFound() {
  return (
    <main className="flex min-h-[400px] items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm sm:p-10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
          <LuSearchX size={34} />
        </div>

        <p className="mt-6 text-6xl font-extrabold text-blue-600">
          404
        </p>

        <h1 className="mt-4 text-xl font-bold text-gray-900 sm:text-2xl">
          Page Not Found
        </h1>

        <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">
          Oops! The page you're looking for doesn't exist
          or may have been moved.
        </p>

        <Link
          to="/"
          className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          <LuHouse size={18} />
          Back to Home
        </Link>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-400">
          <LuGithub size={18} />
          <span>GitHub Finder</span>
        </div>
      </div>
    </main>
  );
}

export default NotUserFound;