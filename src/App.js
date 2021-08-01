/* eslint-disable */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Money from './components/Money.js';
import List from './components/List.js';
import GlobalStyle from './common/Globalstyle.js';
import Deposit from './components/Deposit.js';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Route path="/" exact component={Money} />
        <Route path="/list" component={List} />
        <Route path="/deposit" component={Deposit} />
      </BrowserRouter>
    </>
  );
}

export default App;
