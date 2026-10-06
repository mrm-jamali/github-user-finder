import { useContext } from "react"
import { favoriteContext } from "../context/FavoriteContext";

import FavoriteCard from "../components/FavoriteCard";


function Favorite() {

    const { FavoriteUsers}=useContext(favoriteContext)
  return (
    <div className="min-h-[500px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-[100px] mt-6">
        {FavoriteUsers.map(user=>
             <FavoriteCard key={user.login} user={user} />
        )}
        </div>
      

    </div>
  )
}

export default Favorite