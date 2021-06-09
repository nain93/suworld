import React from "react";
import logo from "../img/logo.png";
import styled from "styled-components";
import { GlobalContainer } from "../GolbalStyles";
import { FaSearch } from "react-icons/fa";

const Container = styled.div`
  margin: 35px 0;
  padding: 1.5rem 0px;
`;

const HeaderItemBox = styled(GlobalContainer)`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 200px;
`;

const SeacrhForm = styled.form`
  border: 2px solid #613abc;

  margin: 0px 2%;
  border-width: 2px;
  border-style: solid;
  width: 450px;
  height: 5vh;
  display: flex;
  align-items: center;
  input {
    width: 100%;
    height: 100%;
    padding: 0 2%;
    border: 0;
    outline: none;
  }
  svg {
    color: #613abc;
  }
`;

function Header() {
  return (
    <Container>
      <HeaderItemBox>
        <div>
          <a href="http://localhost:3000/#/">
            <LogoImg src={logo} alt="logo" />
          </a>
        </div>
        <SeacrhForm>
          <input type="text" />
          <div>
            <button type="submit">
              <FaSearch size="24" />
            </button>
          </div>
        </SeacrhForm>
      </HeaderItemBox>
    </Container>
  );
}

export default Header;
