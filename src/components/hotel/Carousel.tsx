/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Carousel = ({ images }: { images: string[] }) => {
  return (
    <>
      <Swiper css={containerStyles} spaceBetween={10}>
        {images.map((url, idx) => (
          <SwiperSlide key={idx}>
            <img src={url} alt={`slide-${idx}`} css={imageStyles} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

const containerStyles = css`
  padding: 0 24px;
  height: 300px;
`;

const imageStyles = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

export default Carousel;
