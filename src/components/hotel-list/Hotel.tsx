/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

import { Hotel as HotelProps } from "@models/hotel";
import ListRow from "@shared/ListRow";
import Flex from "@shared/Flex";
import Spacing from "@shared/Spacing";
import Text from "@shared/Text";
import addDelimiter from "@utils/addDelimiter";

export const Hotel = ({ hotel }: { hotel: HotelProps }) => {
  return (
    <ListRow
      contents={
        <Flex direction="column">
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