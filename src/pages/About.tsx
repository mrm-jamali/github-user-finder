import { LuGithub, LuCode, LuSearch } from "react-icons/lu";
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:py-10">
      <section className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm sm:p-8">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
          <LuGithub size={32} />
        </div>

        <h1 className="mt-3 text-3xl font-bold text-gray-900">
          About GitHub Finder
        </h1>

        <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-gray-600">
          GitHub Finder is a simple application that helps you discover
          GitHub developers, explore their profiles, and save your
          favorite users.
        </p>

        <div className="mt-6 grid gap-4 text-left sm:grid-cols-2">
          <div className="rounded-xl bg-gray-50 p-4">
            <LuSearch size={26} className="text-blue-600" />

            <h2 className="mt-2 text-lg font-semibold text-gray-900">
              Search Users
            </h2>

            <p className="mt-1 text-sm leading-6 text-gray-600">
              Search for GitHub users and discover their public profiles.
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-4">
            <LuCode size={26} className="text-blue-600" />

            <h2 className="mt-2 text-lg font-semibold text-gray-900">
              Built With
            </h2>

            <p className="mt-1 text-sm leading-6 text-gray-600">
              React, TypeScript, Tailwind CSS, TanStack Query, and the
              GitHub API.
            </p>
          </div>
        </div>

        <Link
          to="/"
          className="mt-5 inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Explore Users
        </Link>
      </section>
    </main>
  );
}

export default About;