import React from 'react';
import Money from './components/Money.js';
import Template from './components/Template.js';
import GlobalStyle from './components/Globalstyle.js';

function App(){
  return(
    <>
    <GlobalStyle/>
    <Template>
      <Money/>
    </Template>
    </>
  )
}

export default App;
