import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom'
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {depositAccount} from '../modules/account';

const ListBlock = styled.div`
  display: flex;
  flex-direction: column; 
  background: none;
  justify-content: space-around;
`;

const PersonButton = styled.button`
  height: 70px;
  display: flex;
  flex-direction: row; 
  background: none;
  border: none;
  margin: 1px 0;
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


function PersonList( {history} ){
  const [persons, setPersons] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(()=>{
    let abortController = new AbortController(); //http fetch를 취소하는 AbortController를 사용해서 에러 해결
    const fetchPersons = async() => {
      try{
        setError(null);
        setPersons(null);
        setLoading(true);
        const res = await axios.get('https://inha-graduation-exhibition-api.herokuapp.com/transfer-accounts');
        setPersons(res.data); //데이터가 res.data에 있음
      }catch(e){
        setError(e); //e가뭐야
      }
      setLoading(false);
    };

    fetchPersons();
    return () => {
      abortController.abort();
    }
  }, []);

  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러 발생</div>;
  if (!persons) return null;

  const selectBtn = (data) =>{
    history.push("/deposit");
    dispatch(depositAccount(data));
  }
  //onClick= {()=>{history.push({pathname:"/deposit", state:{value:value, person:persons[index]}})}}

  return(
    <ListBlock> 
      {persons.map((person, index) => {
        return <PersonButton key = {person._id} onClick= {()=>selectBtn(persons[index])}>
          <Circle><img src={person.bankImageUrl}/></Circle>
          <AccountInfo>
            <p className="c1">{person.accountHolder}</p>
            <p className="c2">{person.bankName} {person.accountNumber}</p>
          </AccountInfo>
        </PersonButton>
      })}       
    </ListBlock>
  );
  
}

export default withRouter(PersonList);