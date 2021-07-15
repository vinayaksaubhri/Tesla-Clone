import React from 'react';
import styled from 'styled-components';

function Secondary_button({ name, type, onClick }) {
  return (
    <Secondary_Button type={type} onClick={onClick}>
      {name}
    </Secondary_Button>
  );
}

export default Secondary_button;
const Secondary_Button = styled.button`
  background-color: transparent;
  border: 3px solid #171a20;
  width: 100%;
  padding: 10px 40px;
  border-radius: 50px;
  text-transform: uppercase;
  color: #171a20;
  font-weight: 450;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  outline: none;
  &:hover {
    background-color: #171a20;
    color: white;
  }
`;
