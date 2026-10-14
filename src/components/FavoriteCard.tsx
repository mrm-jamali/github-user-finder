import {
  LuHeart,
  LuMapPin,
  LuCalendarDays,
  LuExternalLink,
} from "react-icons/lu";
import { useQuery } from "@tanstack/react-query";
import { getGitHubUser } from "../api/githubApi";
import { favoriteContext } from "../context/FavoriteContext";
import { useContext } from "react";
import type { GitHubUser } from "../types/users";

type userCardProps = {
  user: GitHubUser;
};

function FavoriteCard({ user }: userCardProps) {
  const { data } = useQuery({
    queryKey: ["user", user.login],
    queryFn: () => getGitHubUser({ login: user.login }),
  });

  const { FavoriteUsers, RemoveFavarite } = useContext(favoriteContext);

  const isFavorite = FavoriteUsers.some(
    (favoriteUser) => favoriteUser.login === user.login
  );

  return (
    <div className="w-full bg-white rounded-xl border border-gray-100 p-4 hover:border-gray-200 hover:shadow-md transition-all duration-200">
      <div className="flex flex-col gap-4">
        {/* User Info */}
        <div className="flex items-center gap-3">
          <img
            className="w-14 h-14 rounded-full object-cover shrink-0 ring-2 ring-gray-50"
            src={user.avatar_url}
            alt={user.login}
          />

          <div className="min-w-0 flex-1">
            <h3 className="text-base font-semibold text-gray-900 truncate">
              {user.login}
            </h3>

            <p className="text-xs text-gray-400 truncate mt-0.5">
              {user.html_url}
            </p>

            <span className="inline-block mt-1.5 px-2 py-0.5 text-[11px] text-blue-600 bg-blue-50 rounded-md">
              {user.type}
            </span>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-2 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <LuMapPin
              size={14}
              className="shrink-0 text-gray-400"
            />
            <span className="truncate">
              {data?.location || "Location not available"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <LuCalendarDays
              size={14}
              className="shrink-0 text-gray-400"
            />
            <span>
              Joined{" "}
              {data?.created_at
                ? new Date(data.created_at).toLocaleDateString()
                : "Unknown"}
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 border-y border-gray-100 py-3 text-center">
          <div>
            <p className="text-base font-semibold text-gray-800">
              {data?.public_repos ?? 0}
            </p>
            <p className="text-[10px] text-gray-400 mt-0.5">
              Repositories
            </p>
          </div>

          <div className="border-x border-gray-100">
            <p className="text-base font-semibold text-gray-800">
              {data?.followers ?? 0}
            </p>
            <p className="text-[10px] text-gray-400 mt-0.5">
              Followers
            </p>
          </div>

          <div>
            <p className="text-base font-semibold text-gray-800">
              {data?.following ?? 0}
            </p>
            <p className="text-[10px] text-gray-400 mt-0.5">
              Following
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            View Profile
            <LuExternalLink size={13} />
          </a>

          <button
            type="button"
            onClick={() => RemoveFavarite(user)}
            aria-label="Remove from favorites"
            className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
          >
            <LuHeart
              size={18}
              fill={isFavorite ? "currentColor" : "none"}
              color={isFavorite ? "#ef4444" : "currentColor"}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FavoriteCard;