import React, { useState } from 'react';
import styled from 'styled-components';

function Header() {
  const [menuState, setMenuState] = useState(false);
  return (
    <>
      <Header__Container>
        <a href="/">
          <img src="/images/logo.svg" alt="tesla logo" />
        </a>
        <Header__Menu>
          <a href="/">Model S</a>
          <a href="/">Model 3</a>
          <a href="/">Model X</a>
          <a href="/">Model Y</a>
          <a href="/">Solar Roof</a>
          <a href="/">Solar Panels</a>
        </Header__Menu>
        <Header__Right_Menu>
          <Shop_Button>Shop</Shop_Button>
          <Account_Button>Account</Account_Button>
          <Menu_Button onClick={() => setMenuState(true)}>Menu</Menu_Button>
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
      {/* {menuState && <Header__Menu_Blur />} */}
    </>
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
    height: 12px;
  }
`;
const Header__Menu = styled.div`
  @media (max-width: 980px) {
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
  }
`;
const Shop_Button = styled.a`
  @media (max-width: 980px) {
    display: none;
  }
`;
const Account_Button = styled(Shop_Button)``;
const Menu_Button = styled(Shop_Button)`
  @media (max-width: 980px) {
    height: 28px;
    width: 66px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;

    backdrop-filter: blur(16px);
    background-color: rgba(0, 0, 0, 0.05);
    /* background: black; */
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
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.7s ease-in-out;
`;
const Header__Menu_Blur = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 2;

  opacity: 0.3;
  background: rgba();

  backdrop-filter: blur(5px);
`;
