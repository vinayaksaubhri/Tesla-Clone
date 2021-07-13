import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Header__Container>
      <a>
        <img src="/images/logo.svg" alt="tesla logo" />
      </a>
      <Header__Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>
      </Header__Menu>
      <Header__Right_Menu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <a href="#">Menu</a>
      </Header__Right_Menu>
    </Header__Container>
  );
}

export default Header;

const Header__Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;
const Header__Menu = styled.div`
  @media (max-width: 883px) {
    display: none;
  }
  a {
    font-weight: 450;
    text-decoration: uppercase;
    padding: 0 10px;
  }
`;
const Header__Right_Menu = styled.div`
  a {
    font-weight: 450;
    text-decoration: uppercase;
    padding: 0 10px;
    margin-right: 10px;
  }
`;
