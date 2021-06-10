import React from "react";
import styled, { keyframes } from "styled-components";
import { dummy } from "../dummy";

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: #1f0a51;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  position: relative;
  :hover div {
    -webkit-animation-play-state: paused; /* Safari 4.0 - 8.0 */
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
  100% { left: -100%; }
`;

const LoopItemBox = styled.div`
  position: absolute;
  width: 200%;
  left: 0;
  overflow: hidden;
  height: 100%;
  color: #20f618;
  animation: ${autoLoop} 20s linear infinite;
  > div {
    display: flex;
    align-items: center;
    height: 100%;
    width: 50%;
    float: left;
    white-space: nowrap;
    overflow: hidden;
    span {
      padding: 0 3%;
    }
  }
`;

function LoopSlide() {
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

export default LoopSlide;
