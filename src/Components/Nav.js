import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GlobalContainer } from "../GolbalStyles";

const Container = styled.nav`
  z-index: 20;
  box-shadow: 0px 5px 5px -2px rgb(50 60 70 / 15%);
  border-top: 1px solid #613abc;
  height: 60px;
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
`;

function Nav() {
  return (
    <Container>
      <NavItemBox>
        <Link to="/">홈</Link>
        <Link to="/">메인넷</Link>
        <Link to="/">거래소</Link>
        <Link to="/">dApps</Link>
        <Link to="/">블록체인 기업</Link>
        <Link to="/">이지봇</Link>
        <Link to="/">Blog</Link>
      </NavItemBox>
    </Container>
  );
}

export default Nav;
