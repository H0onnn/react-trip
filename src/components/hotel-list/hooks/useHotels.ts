import { useInfiniteQuery } from "@tanstack/react-query";
import { getHotels } from "@remote/hotel";
import { useCallback } from "react";

export const useHotels = () => {
  const {
    data,
    hasNextPage = false,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ["hotels"],
    queryFn: ({ pageParam }) => getHotels(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.items.length < 10) {
        return undefined;
      }

      return allPages.length + 1;
    },
  });

  const loadMore = useCallback(() => {
    if (hasNextPage === false || isFetching) {
      return;
    }

    fetchNextPage();
  }, [fetchNextPage, hasNextPage, isFetching]);

  const hotels = data?.pages.flatMap((page) => page.items);

  return {
    data: hotels,
    loadMore,
    hasNextPage,
    isFetching,
  };
};
