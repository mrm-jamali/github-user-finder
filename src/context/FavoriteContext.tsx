import { createContext, useState } from "react";

import type { ReactNode } from "react";
import type { GitHubUser } from "../types/users";

type Props = {
  children: ReactNode;
};

type FavoriteContextType = {
  FavoriteUsers: GitHubUser[];
  setFavoriteUsers: React.Dispatch<React.SetStateAction<GitHubUser[]>>;
  addFavarite: (user: GitHubUser) => void;
  RemoveFavarite:(user:GitHubUser)=>void;
};

export const favoriteContext = createContext<FavoriteContextType>(
  {} as FavoriteContextType,
);

function FavoriteProvider({ children }: Props) {
  const [FavoriteUsers, setFavoriteUsers] = useState<GitHubUser[]>([]);

  const addFavarite = (user: GitHubUser) => {
    if (
     FavoriteUsers.some((FavoriteUser) => FavoriteUser.login === user.login)
    ) {
      return;
    } 
    console.log("favariteuser", user);
      setFavoriteUsers((prev) => [...prev, user]);
  };
  const  RemoveFavarite=(user: GitHubUser)=> {
setFavoriteUsers(FavoriteUsers.filter((FavoriteUser)=>FavoriteUser.login!==user.login))
  }

  return (
    <favoriteContext.Provider
      value={{ FavoriteUsers, setFavoriteUsers, addFavarite,RemoveFavarite }}
    >
      {children}
    </favoriteContext.Provider>
  );
}

export default FavoriteProvider;
