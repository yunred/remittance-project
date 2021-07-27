import React, { useEffect, useState } from 'react';
import {useLocation} from "react-router";
import styled from 'styled-components';
import axios from 'axios';
import Template from '../common/Template';
import Back from '../common/Back';
import Button from '../common/ButtonStyle';
import check from '../check.png';


const DepositBlock = styled.div`
  height: 55vh;
  display: flex;
  flex-direction: column; 
  justify-content: space-between;

  .num{
    font-size: 16px;
    color: gray;
  }
`;

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


`;

const RecipientCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: 1px solid #ced4da;
  display: flex;
  align: left;
  align-items: center;
  justify-content: center;
  margin: auto 8px;

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
  }

`;

const SenderBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px; 
`;

const PersonBlock = styled.button`
  height: 70px;
  display: flex;
  flex-direction: row; 
  background: none;
  border: none;
  &:active {
    background: #F5FFFA;
  }
`;
const Circle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  border: 1px solid #ced4da;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 8px;

  img {
    width: 32px;
    height: 32px;
    object-fit: cover;
  }

`;

const Check = styled.div`
  width: 48px;
  height: 48px;
  border: 1px none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 8px;
  margin-left: auto; 

  img {
    width: 32px;
    height: 32px;
    object-fit: cover;
    visibility: ${props=>props.index === props.checked ? 'visible': 'hidden'}
  }

`;
const AccountInfo= styled.div`
  height: 50px;
  background: none;
  text-align: left;
  padding: 8px 16px;
  line-height : 5%;
  .c1{
    font-size: 18px;
    font-weight: bold;
  }

  .c2{
    font-size: 14px;
    color: #a9a9a9;
  }
`;

function Deposit( {history} ){
  const [checked, setChecked] = useState(0);
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

  const resultBtn = () =>{
    alert(`
    보낼 사람: ${person.accountHolder}
    보낼 계좌번호: ${person.accountNumber}
    보낼 금액: ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
    출금계좌:  ${accounts[checked].accountName}`);
  }



  return(
    <>
    <Template>
    <Back history = {history} value = {value}/>
    <DepositBlock>
      
    <RecipientBlock>
      <p><span>{person.accountHolder}</span>님 계좌로 <br/>
      <span>{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span> 을 보냅니다</p>
      <RecipientCircle><img src={person.bankImageUrl}/></RecipientCircle>
      <p className ="num">{person.bankName} {person.accountNumber}</p>
    </RecipientBlock>

    <SenderBlock>
      <p className="num">출금 계좌</p>
      {accounts.map((account, index) => {
        return <PersonBlock key = {account._id} onClick= {()=>setChecked(index)}>
          <Circle><img src={account.bankImageUrl}/></Circle>
          <AccountInfo>
            <p className="c1">{account.accountName}</p>
            <p className="c2">{account.accountBalance}</p>
          </AccountInfo>
          <Check index={index} checked={checked}><img src={check} alt='check'/></Check>
        </PersonBlock>
      })}
    </SenderBlock>
    </DepositBlock>


    <Button onClick={()=>resultBtn()} Send = {true}>보내기</Button>
    </Template>
    </>
  )


}



export default Deposit;