import React from 'react';
import {useLocation} from "react-router";
import Template from './components/Template';


function List(){
  const location = useLocation(); //금액 받아오기
  const value = location.state.value;
  console.log(value);

  return(
    <>
    <Template>
    </Template>
    </>
  )
}

export default List;
