/* eslint-disable */

import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
  font-size: 60px;
  padding-left: 20px;
  padding-right: 20px;
  background: none;
`;

const SendMoney = styled.div`
  width: 375px;
  height: 86px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0 40px 0 0;

  h4 {
    font-weight: 600;
  }

  ${(props) =>
    props.isMarked ||
    css`
      visibility: hidden;
    `}
`;

function Back({ children, isMarked, ...rest }) {
  //isMarked는 상단바에 송금표시..
  //isMarked의 styled component에 props 연결

  const money = useSelector((state) => state.amount.money);
  const navigate = useNavigate();
  useEffect(() => {
    if (money === 0) {
      navigate('/');
    }
  }, [money]);

  return (
    <>
      <BackBar>
        <BackButton
          onClick={() => {
            navigate(-1);
          }}>
          &lsaquo;
        </BackButton>
        <SendMoney isMarked={isMarked}>
          <h4>
            {money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원 송금
          </h4>
        </SendMoney>
      </BackBar>
    </>
  );
}

export default Back;
