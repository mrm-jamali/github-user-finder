import UserCard from "./UserCard";
import type { GitHubUser } from "../types/users";

type usersProps = {
  users: GitHubUser[];
};

function Users({ users }: usersProps) {
  return (
    <div className="min-h-[300px]">
      {users.length === 0 ? (
        <div className="flex min-h-[300px] items-center justify-center px-4">
          <div className="text-center">
            <p className="text-xl font-semibold text-gray-700">
              Search for a GitHub user
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Enter a username above to see the results.
            </p>
          </div>
        </div>
      ) : (
        users.map((user) => (
          <UserCard key={user.login} user={user} />
        ))
      )}
    </div>
  );
}

export default Users;