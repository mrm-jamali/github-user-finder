import { LuHeart } from "react-icons/lu";

function UserCard() {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-7 mt-8 mb-10">

      {/* User Info */}
      <div className="flex items-start gap-4">
        <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
          pic
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-lg font-bold text-gray-900 truncate">
            name
          </p>

          <p className="text-sm text-gray-500 truncate">
            username
          </p>

          <p className="text-sm text-blue-600 font-medium">
            تخصص
          </p>

          <p className="text-sm text-gray-500">
            📍 location
          </p>

          <p className="text-xs text-gray-400">
            Joined date
          </p>
        </div>

        <button className="text-gray-400 hover:text-red-500 transition-colors">
          <LuHeart size={24} />
        </button>
      </div>

      {/* Follow */}
      <button className="w-full mt-5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-2.5 rounded-lg transition-colors">
        Follow
      </button>

      {/* Stats */}
      <div className="flex justify-between border-t border-b border-gray-200 my-5 py-4 text-center">
        <div>
          <p className="text-lg font-bold text-gray-900">20</p>
          <p className="text-xs text-gray-500">Repositories</p>
        </div>

        <div>
          <p className="text-lg font-bold text-gray-900">120</p>
          <p className="text-xs text-gray-500">Followers</p>
        </div>

        <div>
          <p className="text-lg font-bold text-gray-900">50</p>
          <p className="text-xs text-gray-500">Following</p>
        </div>
      </div>

      {/* Profile Button */}
      <button className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-2.5 rounded-lg transition-colors">
        View Profile
      </button>
    </div>
  );
}

export default UserCard;