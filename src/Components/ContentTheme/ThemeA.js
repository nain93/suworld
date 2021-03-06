import React from "react";
import styled from "styled-components";
import noImage from "../../img/no_img.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 0px) {
    p {
      font-size: 0.5rem;
    }
    font-size: 0.7rem;
  }
  @media screen and (min-width: 768px) {
    p {
      font-size: 0.8rem;
    }
    font-size: 1rem;
  }

  > div:first-child {
    width: 90%;
    height: 50%;
    background-color: gray;
    border-radius: 10px;
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
    }
  }
`;

const GridBox = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-gap: 1%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));

  > div div:last-child {
    height: 40%;
  }
  > div div:first-child {
    height: 55%;
  }
`;

const ImgBox = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
`;

function ThemeA({ dataA }) {
  if (!dataA) {
    return <div>loading...</div>;
  }
  return (
    <GridBox>
      {dataA.map((item, idx) => (
        <Container key={idx}>
          <ImgBox
            bgUrl={
              item.backdrop_path
                ? `https://image.tmdb.org/t/p/w300${item.backdrop_path}`
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

export default ThemeA;
