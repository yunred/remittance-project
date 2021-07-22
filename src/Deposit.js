import React, { useEffect, useState } from 'react';
import {useLocation} from "react-router";
import styled from 'styled-components';
import axios from 'axios';
import Template from './components/Template';
import Back from './components/Back';


const RecipientBlock = styled.div`
  display: flex;
  flex-direction: row; 
  flex-wrap: wrap;
  background: none;
  justify-content: space-between;
  padding: 12px;
  
  p{
    font-size: 20px;
  }

  span{
    font-weight : bold;
  }

  .num{
    font-size: 16px;
    color: gray;
  }
`;


const RecipientCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: 1px solid #ced4da;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 8px;

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
  }

`;


function Deposit( {history} ){
  const [accounts, setAccounts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation(); //금액 받아오기
  const value = location.state.value;
  const person = location.state.person;
  console.log(value);
  console.log(person);

  useEffect(()=>{
    let abortController = new AbortController(); //http fetch를 취소하는 AbortController를 사용해서 에러 해결
    const fetchAccounts = async() => {
      try{
        setError(null);
        setAccounts(null);
        setLoading(true);
        const res = await axios.get('https://inha-graduation-exhibition-api.herokuapp.com/my-accounts');
        setAccounts(res.data); //데이터가 res.data에 있음
        console.log(res);
      }catch(e){
        setError(e); //e가뭐야
      }
      setLoading(false);
    };

    fetchAccounts();
    return () => {
      abortController.abort();
    }
  }, []);

  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러 발생</div>;
  if (!accounts) return null;
  // <br/><span>{person.bankName}{person.accountNumber}</span>

  return(
    <>
    <Template>
    <Back history = {history} value = {value}/>
    <RecipientBlock>
      <p><span>{person.accountHolder}</span>님 계좌로 <br/>
      <span>{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span> 을 보냅니다</p>
      <RecipientCircle><img src={person.bankImageUrl}/></RecipientCircle>
      <p className ="num">{person.bankName} {person.accountNumber}</p>
    </RecipientBlock>


    
    </Template>
    </>
  )


}



export default Deposit;