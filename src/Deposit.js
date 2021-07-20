import React, { useEffect, useState } from 'react';
import {useLocation} from "react-router";
import styled from 'styled-components';
import axios from 'axios';
import Template from './components/Template';
import Back from './components/Back';

function Deposit( {history} ){
  const [persons, setPersons] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation(); //금액 받아오기
  const value = location.state.value;
  const person = location.state.person;
  console.log(value);
  console.log(person);

  useEffect(()=>{
    let abortController = new AbortController(); //http fetch를 취소하는 AbortController를 사용해서 에러 해결
    const fetchPersons = async() => {
      try{
        setError(null);
        setPersons(null);
        setLoading(true);
        const res = await axios.get('https://inha-graduation-exhibition-api.herokuapp.com/my-accounts');
        setPersons(res.data); //데이터가 res.data에 있음
        console.log(res);
      }catch(e){
        setError(e); //e가뭐야
      }
      setLoading(false);
    };

    fetchPersons();
    return () => {
      abortController.abort()
    }
  }, []);

  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러 발생</div>;
  if (!persons) return null;


  return(
    <>
    <Template>
    <Back history = {history} value = {value}/>
    </Template>
    </>
  )


}



export default Deposit;