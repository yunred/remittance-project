/* eslint-disable */
import Back from 'common/Back';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { depositAccount } from 'reduxModule/account';
import { useNavigate } from 'react-router-dom';
import Loading from 'common/Loading';
import * as S from 'pages/List/style.List';

function List() {
  const [persons, setPersons] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
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
  }, []);

  if (loading) return <Loading />;
  if (error) return <div>에러 발생</div>;
  if (!persons) return null;

  const selectBtn = (data) => {
    navigate('/deposit');
    dispatch(depositAccount(data));
  };
  return (
    <>
      <Back isMarked />
      <S.ListBlock>
        {persons.map((person, index) => {
          return (
            <S.PersonButton
              key={person._id}
              onClick={() => selectBtn(persons[index])}>
              <S.Circle>
                <img alt="bankname" src={person.bankImageUrl} />
              </S.Circle>
              <S.AccountInfo>
                <span className="name">{person.accountHolder}</span>
                <span className="account">
                  {person.bankName} {person.accountNumber}
                </span>
              </S.AccountInfo>
            </S.PersonButton>
          );
        })}
      </S.ListBlock>
    </>
  );
}

export default List;
