import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Car from './Car';
import Header from './Header';

function Dashboard() {
  return (
    <>
      <Header />
      <Dashboard__info>
        <Dashboard__person>vinayak's Tesla</Dashboard__person>
        <Dashboard__info_right>
          <Link>Home</Link>
          <Link>Charging</Link>
          <Link>Settings</Link>
          <Link>Sign out</Link>
        </Dashboard__info_right>
      </Dashboard__info>

      <Dashboard__car_container>
        <Car
          imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815"
          model="model s"
          testDrive
        />
        <Car
          imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815"
          model="model x"
        />
      </Dashboard__car_container>
    </>
  );
}

export default Dashboard;

const Dashboard__container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Dashboard__info = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100vw;
  padding: 60px 190px;
  padding-bottom: 30px;
  margin-top: 30px;
  @media (max-width: 1200px) {
    padding: 60px 60px;
    /* justify-content: center; */
  }
`;
const Dashboard__person = styled.div`
  font-size: 28px;

  font-weight: 450;
  text-transform: capitalize;
  @media (max-width: 980px) {
    display: none;
  }
`;
const Dashboard__info_right = styled.div`
  display: flex;
  gap: 20px;
  a:hover {
    color: black;
    font-weight: 450;
  }
  @media (max-width: 980px) {
  }
`;

const Dashboard__car_container = styled.div`
  display: grid;
  place-items: center;
  gap: 30px;
  padding-bottom: 40px;
`;
