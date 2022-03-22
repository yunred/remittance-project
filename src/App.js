/* eslint-disable */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Money from 'pages/Money/index.Money.js';
import List from 'pages/List/index.List.js';
import GlobalStyle from 'styles/Globalstyle.js';
import Deposit from 'pages/Deposit/index.Deposit.js';
import Template from 'common/Template';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Template>
          <Routes>
            <Route path="/" element={<Money />} />
            <Route path="/list" element={<List />} />
            <Route path="/deposit" element={<Deposit />} />
          </Routes>
        </Template>
      </BrowserRouter>
    </>
  );
}

export default App;
