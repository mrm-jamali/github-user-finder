import { LuHeart } from "react-icons/lu";
import { useQuery } from "@tanstack/react-query";
import { getGitHubUser } from "../api/githubApi";
import { favoriteContext } from "../context/FavoriteContext";
import { useContext } from "react";
import type { GitHubUser } from "../types/users";

type userCardProps = {
  user: GitHubUser;
};

function FavoriteCard({ user }: userCardProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user", user.login],
    queryFn: () => getGitHubUser({ login: user.login }),
  });

  const { addFavarite } = useContext(favoriteContext);

  return (
    <div className="w-full h-[400px] bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-5">
      {/* User Info */}
      <div className="flex flex-col h-full">

        {/* Top Section */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden shrink-0">
            <img
              className="w-full h-full object-cover"
              src={user.avatar_url}
              alt={user.login}
            />
          </div>

          {/* Main Info */}
          <div className="min-w-0 flex-1">
            <p className="text-xl font-bold text-gray-900 truncate">
              {user.login}
            </p>

            <p className="text-sm text-gray-500 truncate mt-1">
              {user.html_url}
            </p>

            <div className="flex flex-col gap-1 mt-2 text-sm text-gray-500">
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
        <div className="flex items-center justify-center gap-3 mt-auto">
          <button className="flex-1 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors">
            Follow
          </button>

          <a
            target="_blank"
            href={user.html_url}
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2.5 border border-blue-600 text-blue-600 hover:bg-blue-50 text-sm font-semibold rounded-lg transition-colors"
          >
            Profile
          </a>

          <button
            onClick={() => {
              addFavarite(user);
            }}
            className="p-2.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LuHeart size={21} />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 border-t border-gray-100 mt-5 pt-4 text-center">
          <div>
            <p className="text-lg font-bold text-gray-900">
              {data?.public_repos ?? 0}
            </p>
            <p className="text-xs text-gray-500">Repositories</p>
          </div>

          <div className="border-x border-gray-200">
            <p className="text-lg font-bold text-gray-900">
              {data?.followers ?? 0}
            </p>
            <p className="text-xs text-gray-500">Followers</p>
          </div>

          <div>
            <p className="text-lg font-bold text-gray-900">
              {data?.following ?? 0}
            </p>
            <p className="text-xs text-gray-500">Following</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoriteCard;