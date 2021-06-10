import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/swiper.scss";
import styled from "styled-components";
import "./Swiper.css";

const Container = styled.div`
  border: 1px solid black;
  height: 10%;
`;

const SwiperStyle = styled(Swiper)`
  width: 100%;
  height: 100%;
  div {
  }
`;

function SwiperC() {
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  return (
    <Container>
      <SwiperStyle
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
        <SwiperSlide>4</SwiperSlide>
        <SwiperSlide>5</SwiperSlide>
      </SwiperStyle>
    </Container>
  );
}

export default SwiperC;
