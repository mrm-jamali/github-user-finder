import { createContext,useState, useContext } from "react";
import type { ReactNode } from "react";
import { useEffect } from "react";


type SearchContextType={
    search:string,
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}
type Props={
    children:ReactNode;
}

  export  const SearchedContext=createContext<SearchContextType | undefined>(undefined)
function SearchContext({children}:Props) {
      const [search, setSearch] = useState(() => {
  return localStorage.getItem("github-search") ?? "";});
  useEffect(() => {
  localStorage.setItem("github-search", search);
}, [search]);

  
  return (
   <SearchedContext.Provider value={{ search,setSearch}}>
    {children}
   </SearchedContext.Provider>
  )
}



export function useSearchContext() {
  const context = useContext(SearchedContext);

  if (context === undefined) {
    throw new Error("useSearchContext must be used within SearchContext");
  }

  return context;
}

export default SearchContext