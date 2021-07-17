import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Primary_button from './Primary_button';
import Secondary_button from './Secondary_button';
import { auth } from '../firebase';
import { login } from '../features/userSlice';

function Sign_up() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const signUp = (e) => {
    e.preventDefault();

    if (!fName) {
      return alert('Please enter a first name!');
    }
    if (!lName) {
      return alert('Please enter a last name!');
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: fName,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: fName,
              }),
            );
            history.push('/dashboard');
          });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <Sginup__container>
      <Sginup__header>
        <Sginup__logo to="/">
          <img src="/images/logo.svg" alt="tesla logo" />
        </Sginup__logo>
        <Sginup__language>
          <img src="/images/golbal_icon.svg" alt="world icon" />
          <span>en-US</span>
        </Sginup__language>
      </Sginup__header>
      <Sginup__info>
        <h1>Create Account</h1>
        <Sginup__form>
          <label htmlFor="fName">First Name</label>
          <input id="fName" type="text" value={fName} onChange={(e) => setFName(e.target.value)} />
          <label htmlFor="lName">Last Name</label>
          <input id="lName" type="text" value={lName} onChange={(e) => setLName(e.target.value)} />
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Primary_button name="Create Account" type="submit" onClick={signUp} />
        </Sginup__form>
        <Login__divider>
          <hr /> <span>OR</span> <hr />
        </Login__divider>
        <Link to="/login">
          <Secondary_button name="Sign in" type="submit" />
        </Link>
      </Sginup__info>
    </Sginup__container>
  );
}

export default Sign_up;

const Sginup__container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
const Sginup__header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: sticky;
  top: 0;
  align-items: center;
`;
const Sginup__logo = styled(Link)`
  img {
    object-fit: contain;
    height: 12.5px;
  }
  padding: 16px;
`;
const Sginup__language = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 6px;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: 450;
  cursor: pointer;
  height: 40px;
  &:hover {
    background-color: hsla(0, 0%, 50.2%, 0.125);
    border-radius: 18px;
  }
`;
const Sginup__info = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-end; */
  gap: 20px;
  min-width: 330px;
  margin: 0 auto;
  margin-top: 20px;
  h1 {
    font-weight: 450;
    font-size: 40px;
    margin-left: -80px;
    color: #171a20;
  }
  @media (max-width: 980px) {
    h1 {
      font-weight: 450;
      font-size: 28px;
      margin-left: -10px;
      margin-top: 8px;
      color: #171a20;
    }
  }
`;
const Sginup__form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    color: #5c5e62;
    font-weight: 500;
    font-size: 15px;
    padding-left: 20px;
    padding-bottom: 8px;
    margin-bottom: 4px;
  }

  input {
    margin-bottom: 24px;

    background-color: #f4f4f4;
    border: 1px solid #f4f4f4;
    outline: none;
    border-radius: 50px;
    padding: 12px 20px;
    color: #393c41;
    font-weight: 600;
  }
  input:focus {
    border: 1px solid #d6d6d7;
    transition: all 0.2s;
  }

  #password {
    margin-bottom: 32px;
  }
  @media (max-width: 980px) {
    padding-top: 16px;
  }
`;
const Sginup__helper = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  a {
    box-shadow: 0 1px 0 0 rgb(24, 27, 33);
    font-size: 13px;
    color: #393c41;
  }
  a:hover {
    transition: box-shadow 0.33s cubic-bezier(0.5, 0, 0, 0.75), color 0.33s ease;
    box-shadow: 0 2px 0 0 rgb(56, 59, 64);
    text-decoration: none;
  }
  span {
    padding: 0px 7px;
  }
`;
const Login__divider = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  align-items: center;
  hr {
    width: 40%;
    height: 0;
    opacity: 0.3;
    color: #5c5e62;
  }
  span {
    font-weight: 500;
    color: #5c5e62;
  }
`;
