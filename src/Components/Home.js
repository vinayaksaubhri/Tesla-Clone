import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for "
        underline_des="Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for "
        underline_des="Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for "
        underline_des="Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model X"
        description="Order Online for "
        underline_des="Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        underline_des=""
        backgroundImg="solar-panel.jpg"
        leftBtnText="Custom order"
        rightBtnText="Learn More"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        underline_des=""
        backgroundImg="solar-roof.jpg"
        leftBtnText="Custom order"
        rightBtnText="Learn More"
      />
    </Container>
  );
}

export default Home;
const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;

  overflow-x: hidden;
`;
