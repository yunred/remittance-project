import React from 'react';
import {useLocation} from "react-router";
import Template from '../common/Template';
import Back from '../common/Back';
import PersonList from '../common/PersonList';


function List( {history} ){
  const location = useLocation(); //금액 받아오기
  const value = location.state.value;

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
