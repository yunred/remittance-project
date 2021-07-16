import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Money from './components/Money.js';
import List from './List.js';

function App(){
  return(
    <>
    <BrowserRouter>
      <Route path="/" exact component={Money}/>
      <Route path="/list" component={List}/>
    </BrowserRouter>
    </>
  )
}

export default App;
