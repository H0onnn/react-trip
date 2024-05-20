import React from "react";
import { useHotels } from "@components/hotel-list/hooks/useHotels";

import InfiniteScroll from "react-infinite-scroll-component";

import Top from "@/components/shared/Top";
import { HotelItem } from "@/components/hotel-list/HotelItem";
import Spacing from "@/components/shared/Spacing";

export const HotelList = () => {
  const { data: hotels, hasNextPage, loadMore } = useHotels();

  return (
    <div>
      <Top title="인기 호텔" subtitle="호텔부터 펜션까지 최저가" />

      <InfiniteScroll
        dataLength={hotels?.length ?? 0}
        hasMore={hasNextPage}
        loader={<></>}
        next={loadMore}
        scrollThreshold="100px"
      >
        <ul>
          {hotels?.map((hotel, idx) => (
            <React.Fragment key={hotel.id}>
              <HotelItem hotel={hotel} />

              {hotels.length - 1 !== idx && (
                <Spacing
                  size={8}
                  backgroundColor="gray100"
                  style={{ margin: "20px 0" }}
                />
              )}
            </React.Fragment>
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
};
