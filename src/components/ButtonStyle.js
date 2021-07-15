import React from 'react';
import styled, {css} from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  outline: none;
  border: none;
  color: ${props=>props.disabled? 'white' : 'black'};
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  margin: auto;
  justify-content: center;

  /* 크기 */
  width: 100px;
  height: 50px;
  font-size: ${props=>props.className =='cancelback'? '20px' : '40px'};

  /* 색상 */
  background: none;
  &:hover {
    color: gray;
  }
  &:active {
    background: #F5FFFA;
  }

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }

  

  


`;

function Button({ children, ...rest}) {
  return (
    <StyledButton {...rest}>
      {children}
    </StyledButton>
  );
}

export default Button;