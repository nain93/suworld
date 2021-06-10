import React from "react";
import logo from "../img/logo.png";
import styled from "styled-components";
import { GlobalContainer } from "../GolbalStyles";
import { FaSearch } from "react-icons/fa";

const Container = styled.div`
  margin: 1.5% 0;
  padding: 1.5rem 0px;
`;

const HeaderItemBox = styled(GlobalContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    @media screen and (min-width: 0px) {
      position: absolute;
      top: 2%;
      right: 2%;
    }
    @media screen and (min-width: 768px) {
      position: static;
    }
    img {
      @media screen and (min-width: 0px) {
        width: 80px;
      }
      @media screen and (min-width: 768px) {
        width: 200px;
      }
    }
  }
`;

const LogoImg = styled.img``;

const SeacrhForm = styled.form`
  border: 2px solid #613abc;

  @media screen and (min-width: 0px) {
    position: absolute;
    left: 20%;
    height: 4vh;
    width: 45%;
    svg {
      width: 16px;
      height: 16px;
    }
  }
  @media screen and (min-width: 768px) {
    position: static;
  }
  margin: 0% 2%;
  border-width: 2px;
  border-style: solid;
  width: 50%;
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

function Search() {
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

export default Search;
