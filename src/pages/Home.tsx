import Header from "../components/Header";
import { useState } from "react";
import PopularUsers from "../components/PopularUsers";
import Users from "../components/Users";
import { searchGitHubUsers } from "../api/githubApi";
import { useQuery } from "@tanstack/react-query";
import LoadingSpi from "../components/LoadingSpi";
import ErrorMessage from "../components/ErrorMessage";

function Home() {
  const [search, setSearch] = useState("");

  const { data, error, isLoading,refetch} = useQuery({
    queryKey: ["users", search],
    queryFn: () => searchGitHubUsers({ search }),
    enabled: search.trim().length > 0,
  });
  // console.log(data);

  return (
    <div>
      <Header search={search} setSearch={setSearch} />
      {isLoading ? (
        <LoadingSpi />
      ) : error ? (
      
          <ErrorMessage onRetry={refetch} />
       
      ) : (
        <Users users={data?.items ?? []} />
      )}
      <PopularUsers />
    </div>
  );
}

export default Home;
