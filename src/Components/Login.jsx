import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Primary_button from './Primary_button';
import Secondary_button from './Secondary_button';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Login__Container>
      <Login__header>
        <Login__logo to="/">
          <img src="/images/logo.svg" alt="tesla logo" />
        </Login__logo>
        <Login__language>
          <img src="/images/golbal_icon.svg" alt="world icon" />
          <span>en-US</span>
        </Login__language>
      </Login__header>
      <Login__info>
        <h1>Sign In</h1>
        <Login__form>
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Primary_button name="Sign In" type="submit" />
          <Login__helper>
            <a>Forgot Email?</a>
            <span>|</span>
            <a>Forgot Password?</a>
          </Login__helper>
        </Login__form>
        <Login__divider>
          <hr /> <span>OR</span> <hr />
        </Login__divider>
        <Secondary_button name="Create Account" type="submit" />
      </Login__info>
    </Login__Container>
  );
}

export default Login;

const Login__Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
const Login__header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: sticky;
  top: 0;
  align-items: center;
`;
const Login__logo = styled(Link)`
  img {
    object-fit: contain;
    height: 12.5px;
  }
  padding: 16px;
`;
const Login__language = styled.div`
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
const Login__info = styled.div`
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
    margin-left: -10px;
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
const Login__form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    color: #5c5e62;
    font-weight: 500;
    font-size: 15px;
    padding-left: 20px;
    padding-bottom: 8px;
  }

  input {
    margin-bottom: 16px;

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
    margin-bottom: 16px;
  }
  @media (max-width: 980px) {
    padding-top: 16px;
  }
`;
const Login__helper = styled.p`
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
