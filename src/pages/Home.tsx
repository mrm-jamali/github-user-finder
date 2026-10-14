import Header from "../components/Header";

import PopularUsers from "../components/PopularUsers";
import Users from "../components/Users";
import { searchGitHubUsers } from "../api/githubApi";

import { useInfiniteQuery } from "@tanstack/react-query";
import LoadingSpi from "../components/LoadingSpi";
import ErrorMessage from "../components/ErrorMessage";
import { useSearchContext } from "../context/SearchContext";
import { useState } from "react";

function Home() {
  const { search, setSearch } = useSearchContext();
  const [submittedSearch,setSubmittedSearch]=useState(search)
  
  const {
    data,
    error,
    isLoading,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["users", submittedSearch],
    queryFn: ({ pageParam }) =>
      searchGitHubUsers({search: submittedSearch, page: pageParam, per_page: 10 }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      console.log("lastPage:", lastPage);
      console.log("allPages:", allPages);

      if (!lastPage || !Array.isArray(lastPage.items)) {
        return undefined;
      }

      return lastPage.items.length === 10 ? allPages.length + 1 : undefined;
    },
    enabled: submittedSearch.trim().length > 0,
  });
  // console.log(data);
  const users = data?.pages.flatMap((page) => page.items) ?? [];

  return (
    <div>
      <Header search={search} setSearch={setSearch}  submittedSearch={submittedSearch} setSubmittedSearch={setSubmittedSearch} />
      {isLoading ? (
        <LoadingSpi />
      ) : error ? (
        <ErrorMessage onRetry={refetch} />
      ) : (
        <Users users={users} />
      )}
      {hasNextPage && (
        <div className="flex justify-center py-6">
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="rounded-lg bg-emerald-600 px-6 py-3 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
      <PopularUsers />
    </div>
  );
}

export default Home;
