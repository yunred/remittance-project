/* eslint-disable */

import React from 'react';
import styled, { css } from 'styled-components';
import colors from 'styles/colors';

function Button({ children, Cancel, Send, Back, ...rest }) {
  return (
    <StyledButton Cancel={Cancel} Send={Send} Back={Back} {...rest}>
      <ButtonText Cancel={Cancel} Send={Send} Back={Back} {...rest}>
        {children}
      </ButtonText>
    </StyledButton>
  );
}
const StyledButton = styled.button`
  display: inline-flex;
  outline: none;
  border: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 10px;

  /* 크기 */
  width: 100px;
  height: 55px;

  /* 색상 */
  background: none;
  &:hover {
    color: ${(props) => (props.disabled ? 'none' : 'gray')};
  }
  &:active {
    background: #f5fffa;
  }

  /* 기타 */
  &:disabled {
    visibility: hidden;
  }

  ${(props) =>
    props.Send &&
    css`
      width: 100%;
      height: 59px;
      border-radius: 10px;
      background-color: ${colors.blue};
    `}
`;

const ButtonText = styled.span`
  color: ${colors.black};
  font-size: 30px;
  ${(props) =>
    props.Cancel &&
    css`
      font-size: 20px;
    `}

  ${(props) =>
    props.Back &&
    css`
      font-size: 20px;
    `}

    ${(props) =>
    props.Send &&
    css`
      font-size: 20px;
      color: ${colors.white};
    `}
`;
export default Button;
