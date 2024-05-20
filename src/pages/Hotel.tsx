import { useParams } from "react-router-dom";
import { useHotel } from "@components/hotel/hooks/useHotel";
import Top from "@components/shared/Top";
import Carousel from "@components/hotel/Carousel";
import Contents from "@components/hotel/Contents";
import Rooms from "@components/hotel/Rooms";

export const Hotel = () => {
  const { id } = useParams() as { id: string };

  const { data, isLoading } = useHotel(id);

  if (data == null || isLoading) {
    return <div>loading ...</div>;
  }

  const { name, comment, images, contents } = data;

  return (
    <>
      <Top title={name} subtitle={comment} />
      <Carousel images={images} />
      <Rooms hotelId={id} />
      <Contents contents={contents} />
    </>
  );
};
