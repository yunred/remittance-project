import React, {useState} from 'react';

function Money() {
  const [value, setValue] = useState('0');
  const [isActive, setActive] = useState(false);
  const [isLimit, setLimit] = useState(false);
  //취소, <- 버튼, 보내기버튼 활성화

  const onInputNum = (e) =>{
    if (value === '0'){
      setValue(e.target.textContent);
      setActive(true);
    }else if(e.target.textContent === '취소'){
      setValue('0');
    }else if(e.target.textContent === '⬅︎'){
      setValue((preValue) => preValue.slice(0,-1));
    }else if((value + e.target.textContent)>2000000){ //200만원 초과할때
      setLimit(true);
      setValue('2000000');
    }else{
      setValue((preValue) => preValue + e.target.textContent);
      console.log(value);
    }
  };


  return(
    <div className = 'button'>
    <h1>{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</h1>
    <h4 className = {isLimit?'limit':'unlimit'}>최대 200만원까지 입력할 수 있습니다</h4>
    <button onClick= {onInputNum}>1</button>
    <button onClick= {onInputNum}>2</button>
    <button onClick= {onInputNum}>3</button>

    <button onClick= {onInputNum}>4</button>
    <button onClick= {onInputNum}>5</button>
    <button onClick= {onInputNum}>6</button>

    <button onClick= {onInputNum}>7</button>
    <button onClick= {onInputNum}>8</button>
    <button onClick= {onInputNum}>9</button>

    <button className ={isActive?'activebutton':'inactivbutton'} onClick= {onInputNum}>취소</button>
    <button onClick= {onInputNum}>0</button>
    <button className ={isActive?'activebutton':'inactivbutton'} onClick= {onInputNum}>⬅︎</button>

    </div>
  )


}

export default Money;