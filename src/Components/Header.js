import React, { useState } from 'react';
import styled from 'styled-components';

function Header() {
  const [menuState, setMenuState] = useState(false);
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
        <a href="#" onClick={() => setMenuState(true)}>
          Menu
        </a>
      </Header__Right_Menu>
      <Header__Menu_Nav show={menuState}>
        <img src="/images/cross.svg" onClick={() => setMenuState(false)} />
        <li>
          <a>Existing Inventory</a>
        </li>
        <li>
          <a>Used Inventory</a>
        </li>
        <li>
          <a>Trade-in</a>
        </li>
        <li>
          <a>Cybertruck</a>
        </li>
        <li>
          <a>Roadaster</a>
        </li>
      </Header__Menu_Nav>
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
  z-index: 1;
  img {
    height: 15px;
  }
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
const Header__Menu_Nav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
      cursor: pointer;
    }
  }
  img {
    height: 30px;
    align-self: flex-end;
    cursor: pointer;
  }
  display: ${(props) => (props.show ? 'flex' : 'none')};
`;
