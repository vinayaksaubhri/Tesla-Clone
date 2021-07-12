import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
      <Section />
      <Section />
      <Section />
      <Section />
      <Section />
    </Container>
  );
}

export default Home;
const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;

  overflow: auto;
  overflow-x: hidden;
`;
