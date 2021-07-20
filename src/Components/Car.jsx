import React from 'react';
import styled from 'styled-components';
import Primary_button from './Primary_button';
import Secondary_button from './Secondary_button';

function Car({ imgSrc, model, testDrive }) {
  return (
    <Car__container>
      <Car__img>
        <img src={imgSrc} alt="" />
      </Car__img>
      <Car__model>{model}</Car__model>
      <Car__action>
        <Primary_button name="order" />
        {testDrive && <Secondary_button name="test drive" />}
      </Car__action>
      <Car__info>
        <span>Request a Call</span> to speak with a product specialist, value your trade-in or apply for leasing
      </Car__info>
    </Car__container>
  );
}

export default Car;
const Car__container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #d0d1d2;
`;
const Car__img = styled.div`
  display: flex;
  img {
    object-fit: contain;
    width: 1000px;
  }
  @media (max-width: 980px) {
    img {
      margin: auto;
      width: 90%;
    }
  }
`;
const Car__model = styled.h2`
  font-weight: 450;
  font-size: xx-large;
  margin-top: -150px;
  text-transform: capitalize;
  @media (max-width: 980px) {
    margin-top: -50px;
  }
`;
const Car__action = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
  button {
    width: 230px;
    margin-bottom: 30px;
  }
  @media (max-width: 980px) {
    flex-direction: column;
  }
`;
const Car__info = styled.p`
  max-width: 350px;
  text-align: center;
  font-size: smaller;
  line-height: 1.5;
  font-weight: 450;
  color: #393c41;
  span {
    color: #3e6be2;
    cursor: pointer;
  }
`;
