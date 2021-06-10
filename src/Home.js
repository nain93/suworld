import React from "react";
import styled from "styled-components";
import ContentBox from "./Components/ContentBox";
import LoopSlide from "./Components/LoopSlide";
import MiniSlide from "./Components/MiniSlide";
import SwiperC from "./Components/SwiperC";
import { GlobalContainer } from "./GolbalStyles";

const Container = styled(GlobalContainer)`
  display: flex;
  margin-top: 1.5%;
  height: 200vh;
`;

const MainContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
`;

const SideContainer = styled.div`
  width: 25%;
  border: 1px solid black;
  margin-left: 3%;
`;

function Home() {
  return (
    <>
      <LoopSlide />
      <Container>
        <MainContainer>
          <SwiperC />
          <MiniSlide />
          <ContentBox />
        </MainContainer>
        <SideContainer></SideContainer>
      </Container>
    </>
  );
}

export default Home;
