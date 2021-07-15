import React from 'react';
import styled from 'styled-components';

const StyledMoneyBlock = styled.div`
  padding-top: 100px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 30px;
  align-items: center;
  text-align: center;
  margin: 0 auto;

  h1{
    font-size: 42px;

  }

  h4 {visibility: ${props=>props.islimit ? 'hidden' : 'visible'};
`;

function MoneyBlock({ children, islimit, ...rest}) {
  return (
    <StyledMoneyBlock islimit = {islimit} {...rest}>
      {children}
    </StyledMoneyBlock>
  );
}


export default MoneyBlock;