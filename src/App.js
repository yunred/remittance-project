/* eslint-disable */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Money from 'components/Money/index.Money.js';
import List from 'components/List/index.List.js';
import GlobalStyle from 'styles/Globalstyle.js';
import Deposit from 'components/Deposit/index.Deposit.js';
import Template from 'common/Template';

function App() {
  return (
    <>
      <GlobalStyle />
      <Template>
        <Routes>
          <Route path="/" element={<Money />} />
          <Route path="/list" element={<List />} />
          <Route path="/deposit" element={<Deposit />} />
        </Routes>
      </Template>
    </>
  );
}

export default App;
