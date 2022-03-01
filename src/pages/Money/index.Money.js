/* eslint-disable */
import React, { useState } from 'react';
import Button from 'common/ButtonStyle';
import { useDispatch } from 'react-redux';
import { setMoney } from 'redux/amount';
import { useNavigate } from 'react-router-dom';
import * as S from 'pages/Money/style.Money';

function Money() {
  const [value, setValue] = useState('0');
  const [inActive, setInactive] = useState(true);
  const [underLimit, setunderLimit] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onInputNum = (e) => {
    if (value === '0') {
      setValue(e.target.textContent);
      if (e.target.textContent === '0') {
        setInactive(true);
      } else {
        setInactive(false);
      }
      return;
    } else if (value + e.target.textContent > 2000000) {
      //200만원 초과할때
      setValue('2000000');
      setunderLimit(false);
      return;
    } else {
      setValue(value.toString() + e.target.textContent.toString());
      return;
    }
  };

  const onInputElse = (e) => {
    if (e.target.textContent === '취소') {
      setValue('0');
      setInactive(true);
    } else if (e.target.textContent === '⬅︎') {
      if (value.length === 1) {
        //10미만일 때 0으로
        setValue('0');
        setInactive(true);
      } else {
        setValue((preValue) => preValue.slice(0, -1));
      }
    }
    setunderLimit(true);
  };

  const listBtn = () => {
    navigate('/list');
    dispatch(setMoney(value));
  };

  return (
    <>
      <S.MoneyBlock>
        <S.AmountSpan className="inputMoney">
          {value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
        </S.AmountSpan>
        <S.WarningSpan className={underLimit ? 'less' : 'excess'}>
          최대 200만원까지 입력할 수 있습니다
        </S.WarningSpan>
      </S.MoneyBlock>
      <S.ButtonBlock>
        <S.ButtonRow>
          <Button onClick={onInputNum}>1</Button>
          <Button onClick={onInputNum}>2</Button>
          <Button onClick={onInputNum}>3</Button>
        </S.ButtonRow>
        <S.ButtonRow>
          <Button onClick={onInputNum}>4</Button>
          <Button onClick={onInputNum}>5</Button>
          <Button onClick={onInputNum}>6</Button>
        </S.ButtonRow>
        <S.ButtonRow>
          <Button onClick={onInputNum}>7</Button>
          <Button onClick={onInputNum}>8</Button>
          <Button onClick={onInputNum}>9</Button>
        </S.ButtonRow>
        <S.ButtonRow>
          <Button onClick={onInputElse} Cancel={true} disabled={inActive}>
            취소
          </Button>
          <Button onClick={onInputNum}>0</Button>
          <Button onClick={onInputElse} Back={true} disabled={inActive}>
            ⬅︎
          </Button>
        </S.ButtonRow>
        <Button onClick={() => listBtn()} Send={true} disabled={inActive}>
          보내기
        </Button>
      </S.ButtonBlock>
    </>
  );
}

export default Money;
