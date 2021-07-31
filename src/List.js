import React from 'react';
import {useLocation} from "react-router";
import Template from './components/Template';
import Back from './components/Back';
import PersonList from './components/PersonList';


function List( {history} ){
  const location = useLocation(); //금액 받아오기
  const value = location.state.value;
  console.log(value);

  return(
    <>
    <Template>
      <Back history = {history} value = {value} isMarked/>
      <PersonList value = {value}/>
    </Template>
    </>
  )
}

export default List;
