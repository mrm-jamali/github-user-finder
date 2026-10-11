import { useContext } from "react";
import { favoriteContext } from "../context/FavoriteContext";
import FavoriteCard from "../components/FavoriteCard";

function Favorite() {
  const { FavoriteUsers } = useContext(favoriteContext);

  return (
    <div className="min-h-screen pb-16">
      {FavoriteUsers.length === 0 ? (
        <div className="flex min-h-[500px] flex-col items-center justify-center px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-700">
            Your Favorite List Is Empty
          </h2>

          <p className="mt-3 text-gray-500">
            You haven't added any GitHub users to your favorites yet.
          </p>
        </div>
      ) : (
      <div className="mt-6 px-4 md:px-10 lg:px-[100px]">
  <h2 className="mb-15 mt-8 text-2xl font-bold text-gray-700">
    Your Favorite List
  </h2>

  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
    {FavoriteUsers.map((user) => (
      <FavoriteCard key={user.login} user={user} />
    ))}
  </div>
</div>
      )}
    </div>
  );
}

export default Favorite;