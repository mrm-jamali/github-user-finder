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
};

  export const favoriteContext = createContext<FavoriteContextType>(
  {} as FavoriteContextType,
);
function FavoriteProvider({ children }: Props) {
  const [FavoriteUsers, setFavoriteUsers] = useState<GitHubUser[]>([]);

  const addFavarite = (user: GitHubUser) => {
    console.log("favariteuser",user)
    setFavoriteUsers((prev) => [...prev, user]);
  };

  return (
    <favoriteContext.Provider
      value={{ FavoriteUsers, setFavoriteUsers, addFavarite }}
    >
      {children}
    </favoriteContext.Provider>
  );
}

export default FavoriteProvider;
