import React from "react";
import styled from "styled-components";
import noImage from "../../img/no_img.png";

const Container = styled.div`
  > div:first-child {
    width: 90%;
    height: 50%;
    background-color: gray;
    border-radius: 15px;
  }
  > div:last-child {
    margin-top: 1%;
    h1 {
      width: 90%;
      margin: 0 auto;
    }
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      width: 90%;
      margin: 0 auto;
      line-height: 20px;
      word-wrap: break-word;
      font-size: 0.8rem;
    }
  }
`;

const GridBox = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 0.8fr 0.8fr 0.8fr 1fr 1fr;
  > div:not(:first-child, :nth-child(2), :nth-child(3), :nth-child(4)) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  > div:first-child {
    grid-column: 1/3;
    grid-row: 1/4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div:first-child {
      height: 70%;
    }
  }
  > div:nth-child(2),
  > div:nth-child(3),
  > div:nth-child(4) {
    grid-column: 3/5;
    display: flex;
    align-items: center;
    justify-content: space-around;
    div {
      width: 50%;
      height: 80%;
    }
    div:first-child {
      width: 45%;
      margin-left: 2%;
    }
  }
`;

const ImgBox = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
`;

function ThemeB({ dataB }) {
  if (!dataB) {
    return <div>loading...</div>;
  }
  return (
    <GridBox>
      {dataB.map((item, idx) => (
        <Container key={idx}>
          <ImgBox
            bgUrl={
              item.backdrop_path
                ? `https://image.tmdb.org/t/p/w300${item.poster_path}`
                : noImage
            }
          ></ImgBox>
          <div>
            <h1>{item.title}</h1>
            <p>{item.overview}</p>
          </div>
        </Container>
      ))}
    </GridBox>
  );
}

export default ThemeB;
