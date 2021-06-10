import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GlobalContainer } from "../GolbalStyles";
import { GiHamburgerMenu } from "react-icons/gi";

const Container = styled.nav`
  z-index: 20;
  box-shadow: 0px 5px 5px -2px rgb(50 60 70 / 15%);
  border-top: 1px solid #613abc;
  height: 60px;
  width: 100%;
  @media screen and (min-width: 0px) {
    position: absolute;
    top: 0;
    left: 0;
    border: 0;
  }
  @media screen and (min-width: 768px) {
    position: static;
  }
`;

const NavItemBox = styled(GlobalContainer)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  a {
    margin: 0px 2%;
  }
  @media screen and (min-width: 0px) {
    a {
      display: none;
    }
    button {
      display: block;
    }
  }
  @media screen and (min-width: 768px) {
    a {
      display: flex;
    }
    button {
      display: none;
    }
  }
`;

const BurgerContainer = styled.div`
  width: 100%;
  height: 50vh;
  border: 1px solid #613abc;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  a {
  }
`;

function Nav() {
  const [isClick, setIsClick] = useState(false);

  const handleBurgerClick = () => {
    if (isClick) {
      setIsClick(false);
      return;
    }
    if (!isClick) {
      setIsClick(true);
      return;
    }
  };

  return (
    <Container>
      <NavItemBox>
        <button onClick={handleBurgerClick}>
          <GiHamburgerMenu size={24} />
        </button>
        <Link to="/">홈</Link>
        <Link to="/">메인넷</Link>
        <Link to="/">거래소</Link>
        <Link to="/">dApps</Link>
        <Link to="/">블록체인 기업</Link>
        <Link to="/">이지봇</Link>
        <Link to="/">Blog</Link>
      </NavItemBox>
      {isClick && (
        <BurgerContainer>
          <Link to="/">홈</Link>
          <Link to="/">메인넷</Link>
          <Link to="/">거래소</Link>
          <Link to="/">dApps</Link>
          <Link to="/">블록체인 기업</Link>
          <Link to="/">이지봇</Link>
          <Link to="/">Blog</Link>
        </BurgerContainer>
      )}
    </Container>
  );
}

export default Nav;
