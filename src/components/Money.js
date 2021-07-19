import React, {useState} from 'react';
import styled from 'styled-components';
import Button from './ButtonStyle';
import Template from './Template';

const MoneyBlock = styled.div`
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
  .less {
    visibility: hidden;
  }
  .excess{
    visibility: visible;
    color: gray;
  }
`;

const ButtonBlock = styled.div`
  text-align: center;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  
`;


function Money( {history} ) { //route
  const [value, setValue] = useState('0');
  const [inActive, setInactive] = useState(true);
  const [underLimit, setunderLimit] = useState(true);
  //취소, <- 버튼, 보내기버튼 활성화

  const onInputNum = (e) =>{
    if (value === '0'){ //0원일 때
      setValue(e.target.textContent);
      if(e.target.textContent === '0'){
        setInactive(true);
      }else{
        setInactive(false);
      }
    }else if((value + e.target.textContent)>2000000){ //200만원 초과할때
      setValue('2000000');
      setunderLimit(false);
      console.log(underLimit);
    }else{
      setValue((preValue) => preValue + e.target.textContent);
      console.log(value);
    }
  };

  const onInputElse = (e) => {
    if(e.target.textContent === '취소'){
      setValue('0');
      setInactive(true);
    }else if(e.target.textContent === '⬅︎'){
      if(value.length === 1){ //10미만일 때 0으로
        setValue('0');
        setInactive(true);
      }else {
        setValue((preValue) => preValue.slice(0,-1));
      }   
    }
    setunderLimit(true);
  }


  return(
    <>    
    <Template>
      <MoneyBlock>
        <h1>{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</h1>
        <h4 className = {underLimit? 'less': 'excess'}>최대 200만원까지 입력할 수 있습니다</h4>
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

        <Button onClick= {onInputElse} Cancel = {true} disabled = {inActive} >취소</Button>
        <Button onClick= {onInputNum}>0</Button>
        <Button onClick= {onInputElse} Back = {true} disabled = {inActive} >⬅︎</Button>
        <Button onClick= {()=>{history.push({pathname:"/List", state:{value:value}})}} Send = {true} disabled = {inActive}>보내기</Button>
      </ButtonBlock>
    </Template>
    </>
  )

}

export default Money;