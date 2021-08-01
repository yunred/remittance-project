/* eslint-disable */
import React from 'react';
import Template from '../common/Template';
import Back from '../common/Back';
import PersonList from '../common/PersonList';

function List({ history }) {
  return (
    <>
      <Template>
        <Back history={history} isMarked />
        <PersonList />
      </Template>
    </>
  );
}

export default List;
