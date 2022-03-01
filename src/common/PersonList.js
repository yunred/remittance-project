/* eslint-disable prettier/prettier */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { depositAccount } from '../Redux/account';
import { useNavigate } from 'react-router-dom';
import colors from 'styles/colors';
import Loading from 'common/Loading';

function PersonList() {
  const [persons, setPersons] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    let abortController = new AbortController(); //http fetch를 취소하는 AbortController를 사용해서 에러 해결
    const fetchPersons = async () => {
      try {
        setError(null);
        setPersons(null);
        setLoading(true);
        const res = await axios.get(
          'https://inha-graduation-exhibition-api.herokuapp.com/transfer-accounts',
        );
        setPersons(res.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchPersons();
    return () => {
      abortController.abort();
    };
  }, []);

  if (loading) return <Loading />;
  if (error) return <div>에러 발생</div>;
  if (!persons) return null;

  const selectBtn = (data) => {
    navigate('/deposit');
    dispatch(depositAccount(data));
  };

  return (
    <ListBlock>
      {persons.map((person, index) => {
        return (
          <PersonButton
            key={person._id}
            onClick={() => selectBtn(persons[index])}>
            <Circle>
              <img alt="bankname" src={person.bankImageUrl} />
            </Circle>
            <AccountInfo>
              <span className="name">{person.accountHolder}</span>
              <span className="account">
                {person.bankName} {person.accountNumber}
              </span>
            </AccountInfo>
          </PersonButton>
        );
      })}
    </ListBlock>
  );
}

const ListBlock = styled.div`
  display: flex;
  flex-direction: column;
  background: none;
  justify-content: space-around;
`;

const PersonButton = styled.button`
  cursor: pointer;
  height: 70px;
  display: flex;
  flex-direction: row;
  background: none;
  border: none;
  margin: 1px 0;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    filter: grayscale(40%);
  }
`;

const Circle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  border: 1px solid #ced4da;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 8px;

  img {
    width: 32px;
    height: 32px;
    object-fit: cover;
  }
`;

const AccountInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
  background: none;
  text-align: left;
  padding: 12px 16px;
  line-height: 1;
  .name {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 6px;
  }

  .account {
    font-size: 14px;
    color: ${colors.gray200};
  }
`;

export default PersonList;
