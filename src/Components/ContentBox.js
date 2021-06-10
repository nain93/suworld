import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { moviesApi } from "../api";
import ThemeA from "./ContentTheme/ThemeA";
import ThemeB from "./ContentTheme/ThemeB";
import ThemeC from "./ContentTheme/ThemeC";

const Container = styled.div`
  width: 100%;
  height: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  height: 6%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #613abc;
  > button {
    color: white;
    width: 8%;
    height: 60%;
    white-space: nowrap;
    text-align: center;
    border-radius: 20px;
  }
`;

const Main = styled.div`
  height: 100%;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const ThemeBox = styled.div`
  width: 100%;
  height: 5%;
  border: 1px solid red;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

function ContentBox() {
  const [clickValue, setClickValue] = useState("메인");
  const [nowPlaying, setNowPlaying] = useState(null);
  const [upComing, setUpComing] = useState(null);
  const [popular, setPopular] = useState(null);
  const [themeValue, setThemeValue] = useState("A테마");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getData = async () => {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();
      setNowPlaying(nowPlaying.slice(0, 12));
      const {
        data: { results: upcoming },
      } = await moviesApi.upComing();
      setUpComing(upcoming.slice(0, 12));
      const {
        data: { results: popular },
      } = await moviesApi.popular();
      setPopular(popular.slice(0, 12));
    } catch {
      setError("Cant find movie information");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleNavClick = (e) => {
    const { textContent } = e.target;
    setClickValue(textContent);
  };

  const handleThemeSelect = (e) => {
    const { textContent } = e.target;
    setThemeValue(textContent);
    return;
  };

  return (
    <Container>
      <Header>
        <button
          onClick={handleNavClick}
          style={
            clickValue === "메인"
              ? {
                  backgroundColor: "white",
                  color: "#9100FF",
                }
              : {}
          }
        >
          메인
        </button>
        <button
          onClick={handleNavClick}
          style={
            clickValue === "메인넷"
              ? {
                  backgroundColor: "white",
                  color: "#9100FF",
                }
              : {}
          }
        >
          메인넷
        </button>
        <button
          onClick={handleNavClick}
          style={
            clickValue === "마이닝"
              ? {
                  backgroundColor: "white",
                  color: "#9100FF",
                }
              : {}
          }
        >
          마이닝
        </button>
        <button
          onClick={handleNavClick}
          style={
            clickValue === "거래소"
              ? {
                  backgroundColor: "white",
                  color: "#9100FF",
                }
              : {}
          }
        >
          거래소
        </button>
        <button
          onClick={handleNavClick}
          style={
            clickValue === "지갑"
              ? {
                  backgroundColor: "white",
                  color: "#9100FF",
                }
              : {}
          }
        >
          지갑
        </button>
        <button
          onClick={handleNavClick}
          style={
            clickValue === "게임"
              ? {
                  backgroundColor: "white",
                  color: "#9100FF",
                }
              : {}
          }
        >
          게임
        </button>
        <button
          onClick={handleNavClick}
          style={
            clickValue === "디파이"
              ? {
                  backgroundColor: "white",
                  color: "#9100FF",
                }
              : {}
          }
        >
          디파이
        </button>
        <button
          onClick={handleNavClick}
          style={
            clickValue === "쇼핑"
              ? {
                  backgroundColor: "white",
                  color: "#9100FF",
                }
              : {}
          }
        >
          쇼핑
        </button>
        <button
          onClick={handleNavClick}
          style={
            clickValue === "커뮤니티"
              ? {
                  backgroundColor: "white",
                  color: "#9100FF",
                }
              : {}
          }
        >
          커뮤니티
        </button>
        <button
          onClick={handleNavClick}
          style={
            clickValue === "엔터"
              ? {
                  backgroundColor: "white",
                  color: "#9100FF",
                }
              : {}
          }
        >
          엔터
        </button>
        <button
          onClick={handleNavClick}
          style={
            clickValue === "기타"
              ? {
                  backgroundColor: "white",
                  color: "#9100FF",
                }
              : {}
          }
        >
          기타
        </button>
      </Header>
      <Main>
        {themeValue === "A테마" ? (
          <ThemeA dataA={upComing} />
        ) : themeValue === "B테마" ? (
          <ThemeB dataB={popular} />
        ) : (
          <ThemeC dataC={nowPlaying} />
        )}
      </Main>
      <ThemeBox>
        <button onClick={handleThemeSelect}>A테마</button>
        <button onClick={handleThemeSelect}>B테마</button>
        <button onClick={handleThemeSelect}>C테마</button>
      </ThemeBox>
    </Container>
  );
}

export default ContentBox;
