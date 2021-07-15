import React from 'react';
import styled from 'styled-components';

function Primary_button({ name, type, onClick }) {
  return (
    <Primary_Button type={type} onClick={onClick}>
      {name}
    </Primary_Button>
  );
}

export default Primary_button;
const Primary_Button = styled.button`
  background-color: #3e6ae1;
  border: none;
  padding: 12px 40px;
  border-radius: 50px;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  margin-bottom: 8px;
  transition: all 0.4s;
  font-weight: 450;
  &:hover {
    background-color: #3457b1;
  }
`;
