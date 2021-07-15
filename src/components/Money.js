import React, {useState} from 'react';
import styled from 'styled-components';
import Button from './ButtonStyle';
import MoneyBlock from './MoneyBlockStyle';


const ButtonBlock = styled.div`
  text-align: center;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  
`;


function Money() {
  const [value, setValue] = useState('0');
  const [inActive, setInactive] = useState(true);
  const [underlimit, setunderLimit] = useState(true);
  //취소, <- 버튼, 보내기버튼 활성화

  const onInputNum = (e) =>{
    if (value === '0'){
      setValue(e.target.textContent);
      if(e.target.textContent === '0'){
        setInactive(true);
      }else{
        setInactive(false);
      }
    }else if((value + e.target.textContent)>2000000){ //200만원 초과할때
      setValue('2000000');
      setunderLimit(false);
    }else{
      setValue((preValue) => preValue + e.target.textContent);
      console.log(value);
    }
    console.log(underlimit);
  };

  const onInputElse = (e) => {
    if(e.target.textContent === '취소'){
      setValue('0');
      setInactive(true);
      console.log('취소누름');
    }else if(e.target.textContent === '⬅︎'){
      if(value.length === 1){ //10미만일 때 0으로
        setValue('0');
        setInactive(true);
      }else {
        setValue((preValue) => preValue.slice(0,-1));
      }   
    }
  }


  return(
    <>
      <MoneyBlock>
        <h1>{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</h1>
        <h4>최대 200만원까지 입력할 수 있습니다</h4>
      </MoneyBlock>
      <ButtonBlock>
        <Button onClick= {onInputNum}>1</Button>
        <Button onClick= {onInputNum}>2</Button>
        <Button onClick= {onInputNum}>3</Button>
        <br/>

        <Button onClick= {onInputNum}>4</Button>
        <Button onClick= {onInputNum}>5</Button>
        <Button onClick= {onInputNum}>6</Button>
        <br/>

        <Button onClick= {onInputNum}>7</Button>
        <Button onClick= {onInputNum}>8</Button>
        <Button onClick= {onInputNum}>9</Button>
        <br/>

        <Button Cancel = {true} disabled = {inActive} onClick= {onInputElse} CancelBack>취소</Button>
        <Button onClick= {onInputNum}>0</Button>
        <Button Back = {true} disabled = {inActive} onClick= {onInputElse}>⬅︎</Button>
        <Button Send = {true} disabled = {inActive}  onClick= {onInputElse}>보내기</Button>
      </ButtonBlock>
    </>
  )

}

export default Money;