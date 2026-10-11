import type { GitHubUser } from "../types/users";

type Props = {
  item: GitHubUser;
};

function PopularUsersCard({ item }: Props) {
  return (
    <div className="flex min-h-[100px] w-full min-w-0 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white p-3 sm:min-h-[120px] sm:gap-3">
      <img
        src={item.avatar_url}
        alt={item.login}
        className="h-10 w-10 shrink-0 rounded-full object-cover sm:h-14 sm:w-14"
      />

      <div className="min-w-0">
        <p className="truncate text-xs font-semibold text-gray-800 sm:text-sm">
          {item.login}
        </p>
      </div>
    </div>
  );
}

export default PopularUsersCard;