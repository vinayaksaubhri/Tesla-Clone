import React from 'react';
import styled from 'styled-components';

function Section() {
  return (
    <Section__Wrap>
      <Section__Text>
        <h1>Model 3</h1>
        <p>
          Order Online for <span>Touchless Delivery</span>
        </p>
      </Section__Text>
      <Section__Bottom>
        <Section__Button_Wrap>
          <LeftButton>Custom Order</LeftButton>
          <RightButton>Existing Inventory</RightButton>
        </Section__Button_Wrap>
        <Section__DownArrow src="/images/down-arrow.svg" />
      </Section__Bottom>
    </Section__Wrap>
  );
}

export default Section;
const Section__Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('/images/model-s.jpg');
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  scroll-snap-align: start;
`;
const Section__Text = styled.div`
  padding-top: 15vh;
  text-align: center;
  h1 {
    font-size: 40px;
    font-weight: 450;
  }
  p {
    font-weight: 300;
    span {
      text-decoration: underline;
    }
  }
`;
const Section__Button_Wrap = styled.div`
  display: flex;
  margin-bottom: 30px;
  gap: 16px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;
const Section__DownArrow = styled.img`
  margin-bottom: 20px;
  height: 45px;
  animation: animateDown infinite 1.5s;
`;
const Section__Bottom = styled.div`
  display: flex;
  flex-direction: column;
`;
