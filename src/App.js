import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Money from './components/Money.js';
import List from './List.js';
import GlobalStyle from './components/Globalstyle.js';
import Deposit from './Deposit.js';

function App(){
  return(
    <>
    <GlobalStyle/>
    <BrowserRouter>
      <Route path="/" exact component={Money}/>
      <Route path="/list" component={List}/>
      <Route path="/deposit" component={Deposit}/>
    </BrowserRouter>
    </>
  )
}

export default App;
