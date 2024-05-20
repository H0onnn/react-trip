/** @jsxImportSource @emotion/react */

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import dayjs from "dayjs";
import { css } from "@emotion/react";

import { Hotel } from "@models/hotel";
import ListRow from "@shared/ListRow";
import Flex from "@shared/Flex";
import Spacing from "@shared/Spacing";
import Text from "@shared/Text";
import addDelimiter from "@utils/addDelimiter";
import Tag from "@shared/Tag";

import formatTime from "@utils/formatTime";

export const HotelItem = ({ hotel }: { hotel: Hotel }) => {
  const [remainedTime, setReaminedTime] = useState(0);

  useEffect(() => {
    if (hotel.events == null || hotel.events.promoEndTime == null) {
      return;
    }

    const { promoEndTime } = hotel.events;

    const endTime = dayjs(promoEndTime).valueOf();

    const timer = setInterval(() => {
      const remainedSecond = endTime - dayjs().valueOf();

      if (remainedSecond <= 0) {
        clearInterval(timer);
        return;
      }

      setReaminedTime(remainedSecond);
    }, 1_000);

    return () => {
      clearInterval(timer);
    };
  }, [hotel.events]);

  const tagComponent = () => {
    if (hotel.events == null) {
      return null;
    }

    const { name, tagThemeStyle } = hotel.events;

    const promotionText =
      remainedTime > 0 ? ` - ${formatTime(remainedTime)} 남음` : "";

    return (
      <div>
        <Tag
          color={tagThemeStyle.fontColor}
          backgroundColor={tagThemeStyle.backgroundColor}
        >
          {name.concat(promotionText)}
        </Tag>
        <Spacing size={8} />
      </div>
    );
  };

  return (
    <Link to={`/hotel/${hotel.id}`}>
      <ListRow
        contents={
          <Flex direction="column">
            {tagComponent()}
            <ListRow.Texts title={hotel.name} subtitle={hotel.comment} />

            <Spacing size={4} />

            <Text typo="t7" color="gray600">
              {hotel.starRating}성급
            </Text>
          </Flex>
        }
        right={
          <Flex direction="column" align="flex-end">
            <img src={hotel.mainImageUrl} alt="hotel" css={imageStyles} />
            <Spacing size={8} />
            <Text bold={true}>{addDelimiter(hotel.price)}원</Text>
          </Flex>
        }
        style={containerStyles}
      />
    </Link>
  );
};

const containerStyles = css`
  align-items: flex-start;
`;

const imageStyles = css`
  width: 90px;
  height: 110px;
  border-radius: 8px;
  object-fit: cover;
  margin-left: 16px;
`;
