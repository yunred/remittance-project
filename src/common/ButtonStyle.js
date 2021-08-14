/* eslint-disable */

import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  outline: none;
  border: none;
  color: black;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 10px;

  /* 크기 */
  width: 100px;
  height: 55px;
  font-size: 40px;
  font-weight: normal;

  /* 색상 */
  background: none;
  &:hover {
    color: ${(props) => (props.disabled ? 'none' : 'gray')};
  }
  &:active {
    background: #f5fffa;
  }

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }

  ${(props) =>
    props.Cancel &&
    css`
      font-size: 20px;
      color: ${(props) => (props.disabled ? 'white' : 'black')};
    `}

  ${(props) =>
    props.Back &&
    css`
      font-size: 20px;
      color: ${(props) => (props.disabled ? 'white' : 'black')};
    `}

  ${(props) =>
    props.Send &&
    css`
      position: absolute;
      width: 363px;
      height: 59px;
      left: 6px;
      top: 598px;
      font-size: 20px;
      border-radius: 10px;
      color: ${(props) => (props.disabled ? 'none' : 'white')};
      background: ${(props) => (props.disabled ? '#C5D7EE' : '#588DF2')};
    `}
`;

function Button({ children, Cancel, Send, Back, ...rest }) {
  return (
    <StyledButton Cancel={Cancel} Send={Send} Back={Back} {...rest}>
      {children}
    </StyledButton>
  );
}

export default Button;
