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
  const { data, isLoading, error } = useQuery({
    queryKey: ["user", user.login],
    queryFn: () => getGitHubUser({ login: user.login }),
  });
  // console.log(data);

  const { addFavarite } = useContext(favoriteContext);

  return (
    <div className="w-full max-w-[1100px] mx-auto bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 mt-5 mb-5">
      {/* User Info */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden shrink-0">
          <img
            className="w-full h-full object-cover"
            src={user.avatar_url}
            alt={user.login}
          />
        </div>

        {/* Main Info */}
        <div className="min-w-0 flex-1">
          <p className="text-lg font-bold text-gray-900">{user.login}</p>

          <p className="text-sm text-gray-500 truncate">{user.html_url}</p>

          <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
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

        {/* Actions */}
        {/* Actions */}
        <div className="flex items-center shrink-0">
          <div className="flex items-center gap-2 mr-10">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors">
              Follow
            </button>

            <a
              target="_blank"
              href={user.html_url}
              rel="noopener noreferrer"
              className="px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 text-sm font-semibold rounded-lg transition-colors"
            >
              Profile
            </a>
          </div>

          <button
            onClick={() => {
              addFavarite(user);
            }}
            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LuHeart size={21} />
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 border-t border-gray-100 mt-4 pt-3 text-center">
        <div>
          <p className="text-base font-bold text-gray-900">
            {data?.public_repos ?? 0}
          </p>
          <p className="text-[11px] text-gray-500">Repositories</p>
        </div>

        <div className="border-x border-gray-200">
          <p className="text-base font-bold text-gray-900">
            {data?.followers ?? 0}
          </p>
          <p className="text-[11px] text-gray-500">Followers</p>
        </div>

        <div>
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
