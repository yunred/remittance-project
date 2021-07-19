import React from 'react';
import styled from 'styled-components';

const BackBar = styled.div`
  width: 375px;
  height: 86px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;

  margin: 0 auto;

  display: flex;
`;

const BackButton = styled.button`
  display: inline-flex;
  outline: none;
  border: none;
  color: gray;
  font-size : 60px;
  padding-left : 20px;
  padding-right : 20px;
  background: none;
`;

const SendMoney = styled.div`
  width: 375px;
  height: 86px;
  font-size : 24px;
  display : flex;
  align-items : center;
  justify-content: center;
  margin : 0 auto;

  h4{
    visibility: ${props=>props.isMarked? 'visible' :'hiden'};
  }

`;

function Back({ children, history, value, isMarked, ...rest}){
  //isMarked는 상단바에 송금표시..
  return(
  <>
    <BackBar>
      <BackButton onClick={ () => {history.goBack()} }  {...rest}> &lsaquo;</BackButton>
      <SendMoney>
        <h4>{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원 송금</h4>
      </SendMoney>
    </BackBar>
  </>
  );

}

export default Back;