import { LuHeart } from "react-icons/lu";
import { useQuery } from "@tanstack/react-query";
import { getGitHubUser } from "../api/githubApi";
import { favoriteContext } from "../context/FavoriteContext";
import { useContext } from "react";
import type { GitHubUser } from "../types/users";

type userCardProps = {
  user: GitHubUser;
};

function UserCard({ user }: userCardProps) {
  const { data } = useQuery({
    queryKey: ["user", user.login],
    queryFn: () => getGitHubUser({ login: user.login }),
  });

  const { addFavarite, FavoriteUsers } = useContext(favoriteContext);

  const isFavorite = FavoriteUsers.some(
    (favoriteUser) => favoriteUser.login === user.login
  );

  return (
    <div className="mx-auto mt-5 mb-5 w-[90%] max-w-[1100px] rounded-xl bg-white p-4 shadow-md transition-shadow hover:shadow-lg md:w-full">
      {/* User Info */}
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-4">
        {/* Avatar */}
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full bg-gray-200 sm:h-16 sm:w-16">
            <img
              className="h-full w-full object-cover"
              src={user.avatar_url}
              alt={user.login}
            />
          </div>

          {/* Main Info */}
          <div className="min-w-0 flex-1">
            <p className="truncate text-base font-bold text-gray-900 sm:text-lg">
              {user.login}
            </p>

            <p className="truncate text-sm text-gray-500">
              {user.html_url}
            </p>

            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500 sm:gap-4">
              <span>{user.type}</span>
              <span>📍 {data?.location ?? "Unknown"}</span>
              <span>
                Joined{" "}
                {data?.created_at
                  ? new Date(data.created_at).toLocaleDateString()
                  : "Unknown"}
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between gap-2 md:ml-auto md:justify-start">
          <div className="flex items-center gap-2 md:mr-6">
            {/* <button className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 sm:px-4">
              Follow
            </button> */}

            <a
              target="_blank"
              href={user.html_url}
              rel="noopener noreferrer"
              className="rounded-lg border border-blue-600 px-3 py-2 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50 sm:px-4"
            >
              Profile
            </a>
          </div>

          <button
            onClick={() => {
              addFavarite(user);
            }}
            className="shrink-0 rounded-lg p-2 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
          >
            <LuHeart
              size={21}
              fill={isFavorite ? "red" : "white"}
              color={isFavorite ? "red" : "gray"}
            />
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-4 grid grid-cols-3 border-t border-gray-100 pt-3 text-center">
        <div className="min-w-0">
          <p className="text-base font-bold text-gray-900">
            {data?.public_repos ?? 0}
          </p>
          <p className="text-[11px] text-gray-500">Repositories</p>
        </div>

        <div className="min-w-0 border-x border-gray-200">
          <p className="text-base font-bold text-gray-900">
            {data?.followers ?? 0}
          </p>
          <p className="text-[11px] text-gray-500">Followers</p>
        </div>

        <div className="min-w-0">
          <p className="text-base font-bold text-gray-900">
            {data?.following ?? 0}
          </p>
          <p className="text-[11px] text-gray-500">Following</p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;