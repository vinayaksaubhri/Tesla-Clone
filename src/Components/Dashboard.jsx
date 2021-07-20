import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { auth } from '../firebase';
import Car from './Car';
import Header from './Header';
import { logout, selectUser } from '../features/userSlice';

function Dashboard() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutOfApp = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout());
        history.push('/');
      })
      .catch((error) => alert(error.message));
  };
  return (
    <>
      <Header />
      <Dashboard__info>
        <Dashboard__person>{user?.displayName + "'s"} Tesla</Dashboard__person>
        <Dashboard__info_right>
          <Link>Home</Link>
          <Link>Charging</Link>
          <Link>Settings</Link>
          <Link onClick={logoutOfApp}>Sign out</Link>
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

const Dashboard__info = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  padding: 45px;
  margin-top: 60px;
  @media (max-width: 980px) {
    border: 1px solid #d0d1d2;
    padding: 30px;
    margin: 60px auto;
    width: 90vw;
    border-radius: 10px;
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
  justify-content: space-between;
  padding: 0px 20px;
  gap: 20px;
  a:hover {
    color: black;
    font-weight: 450;
  }
  @media (max-width: 980px) {
    width: 80vw;
    margin: auto;
    padding: 0px 10px;
  }
`;

const Dashboard__car_container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding-bottom: 40px;
`;
