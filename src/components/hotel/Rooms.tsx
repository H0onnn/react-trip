/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import styled from "@emotion/styled";

import Flex from "@shared/Flex";
import Text from "@shared/Text";
import ListRow from "@shared/ListRow";
import Tag from "@shared/Tag";
import Spacing from "@shared/Spacing";
import Button from "@shared/Button";

import { useRooms } from "./hooks/useRooms";

import addDelimiter from "@utils/addDelimiter";

const Rooms = ({ hotelId }: { hotelId: string }) => {
  const { data } = useRooms({ hotelId });

  return (
    <Container>
      <Header justify="space-between" align="center">
        <Text bold={true} typo="t4">
          객실정보
        </Text>
        <Text typo="t6" color="gray400">
          1박, 세금 포함
        </Text>
      </Header>
      <ul>
        {data?.map((room) => {
          const 마감임박 = room.avaliableCount === 1;
          const 매진 = room.avaliableCount === 0;

          return (
            <ListRow
              key={room.id}
              left={
                <img
                  src={room.imageUrl}
                  alt={`${room.roomName}`}
                  css={imageStyles}
                />
              }
              contents={
                <ListRow.Texts
                  title={
                    <Flex>
                      <Text>{room.roomName}</Text>
                      {마감임박 === true ? (
                        <>
                          <Spacing size={6} direction="horizontal" />
                          <Tag backgroundColor="red">마감임박</Tag>
                        </>
                      ) : null}
                    </Flex>
                  }
                  subtitle={`${addDelimiter(room.price)}원 / `.concat(
                    room.refundable ? " 환불 가능" : " 환불 불가",
                  )}
                />
              }
              right={
                <Button size="medium" disabled={매진 === true}>
                  {매진 === true ? "매진" : "선택"}
                </Button>
              }
            />
          );
        })}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  margin: 40px 0;
`;

const Header = styled(Flex)`
  padding: 0 24px;
  margin-bottom: 20px;
`;

const imageStyles = css`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
`;

export default Rooms;
