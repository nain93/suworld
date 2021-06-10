import React from "react";
import styled, { keyframes } from "styled-components";
import { dummy } from "../dummy";

const Container = styled.div`
  width: 100%;
  height: 50px;
  margin: 1% 0px;
  background-color: white;
  box-shadow: 0px 5px 5px -2px rgb(50 60 70 / 15%);
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  position: relative;
  :hover div {
    -webkit-animation-play-state: paused;
    animation-play-state: paused;
  }
  @media screen and (min-width: 0px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const autoLoop = keyframes`
  0% { left: 0%; }
  100% { left: -200%; }
`;

const LoopItemBox = styled.div`
  position: absolute;
  width: 400%;
  left: 0;
  overflow: hidden;
  height: 100%;
  color: black;
  animation: ${autoLoop} 40s linear infinite;
  > div {
    display: flex;
    align-items: center;
    height: 100%;
    width: 50%;
    float: left;
    white-space: nowrap;
    span {
      width: 100%;
      padding: 0 1%;
    }
  }
`;

function MiniSlide() {
  return (
    <Container>
      <LoopItemBox>
        <div>
          {dummy.map((item, idx) => (
            <span key={idx}>
              {item.time}시간 전 {item.money}
            </span>
          ))}
        </div>
        <div>
          {dummy.map((item, idx) => (
            <span key={idx}>
              {item.time}시간 전 {item.money}
            </span>
          ))}
        </div>
      </LoopItemBox>
    </Container>
  );
}

export default MiniSlide;
