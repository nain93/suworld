import React from "react";
import styled from "styled-components";
import noImage from "../../img/no_img.png";

const Container = styled.div`
  > div:first-child {
    width: 90%;
    height: 50%;
    background-color: gray;
    border-radius: 10px;
  }
  > div:last-child {
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
  padding: 1%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 2fr 1fr 1fr 1fr 1fr 1fr;
  > div:first-child {
    grid-column: 1/2;
    grid-row: 1/3;
    div {
      height: 70%;
    }
  }
  > div:nth-child(2) {
    grid-column: 2/3;
    grid-row: 1/3;
    div {
      height: 70%;
    }
  }
  > div:not(:first-child, :nth-child(2)) {
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      width: 40%;
      height: 90%;
    }
    div:last-child {
      width: 60%;
      height: 100%;
    }
  }
`;

const ImgBox = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
`;

function ThemeC({ dataC }) {
  if (!dataC) {
    return <div>loading...</div>;
  }
  return (
    <GridBox>
      {dataC.map((item, idx) => (
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

export default ThemeC;
