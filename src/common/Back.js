/* eslint-disable */

import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import colors from 'styles/colors';

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
      <BackBar isMarked={isMarked}>
        <BackButton
          onClick={() => {
            navigate(-1);
          }}>
          &lsaquo;
        </BackButton>
        <SendMoney isMarked={isMarked}>
          <span>
            {money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원 송금
          </span>
        </SendMoney>
      </BackBar>
    </>
  );
}
const BackBar = styled.div`
  display: flex;
  width: 375px;
  height: 86px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  margin: 0 auto;

  ${(props) =>
    props.isMarked &&
    css`
      ::after {
        content: '';
        position: absolute;
        height: 1px;
        width: 100%;
        background: ${colors.gray100};
        top: 86px;
      }
    `}
`;

const BackButton = styled.button`
  display: inline-flex;
  outline: none;
  border: none;
  color: ${colors.gray100};
  font-size: 40px;
  padding-left: 20px;
  padding-right: 20px;
  background: none;
  text-align: center;
  line-height: 86px;
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

  span {
    font-weight: 500;
    font-size: 20px;
  }

  ${(props) =>
    props.isMarked ||
    css`
      visibility: hidden;
    `}
`;
export default Back;
