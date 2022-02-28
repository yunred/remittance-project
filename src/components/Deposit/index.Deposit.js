/* eslint-disable */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Template from 'common/Template';
import Back from 'common/Back';
import Button from 'common/ButtonStyle';
import check from 'check.png';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { withdrawalAccount } from 'Redux/account';
import * as S from './style.Deposit';

function Deposit() {
  const [checked, setChecked] = useState(0);
  const [accounts, setAccounts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const money = useSelector((state) => state.amount.money);
  const depositPerson = useSelector((state) => state.account.deposit);

  useEffect(() => {
    let abortController = new AbortController(); //http fetch를 취소하는 AbortController를 사용해서 에러 해결
    const fetchAccounts = async () => {
      try {
        setError(null);
        setAccounts(null);
        setLoading(true);
        const res = await axios.get(
          'https://inha-graduation-exhibition-api.herokuapp.com/my-accounts',
        );
        setAccounts(res.data); //데이터가 res.data에 있음
      } catch (e) {
        setError(e); //e가뭐야
      }
      setLoading(false);
    };

    fetchAccounts();
    return () => {
      abortController.abort();
    };
  }, []);

  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러 발생</div>;
  if (!accounts) return null;

  const ResultBtn = () => {
    dispatch(withdrawalAccount(accounts[checked]));
    alert(`
    보낼 사람: ${depositPerson.accountHolder}
    보낼 계좌번호: ${depositPerson.accountNumber}
    보낼 금액: ${money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
    출금계좌:  ${accounts[checked].accountName}`);
  };

  return (
    <>
      <Template>
        <Back />
        <S.DepositBlock>
          <S.RecipientBlock>
            <p>
              <span>{depositPerson.accountHolder}</span>님 계좌로 <br />
              <span>
                {money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </span>{' '}
              을 보냅니다
            </p>
            <S.RecipientCircle>
              <img src={depositPerson.bankImageUrl} />
            </S.RecipientCircle>
            <p className="num">
              {depositPerson.bankName} {depositPerson.accountNumber}
            </p>
          </S.RecipientBlock>

          <S.SenderBlock>
            <p className="num">출금 계좌</p>
            {accounts.map((account, index) => {
              return (
                <S.PersonButton
                  key={account._id}
                  onClick={() => setChecked(index)}>
                  <S.Circle>
                    <img src={account.bankImageUrl} />
                  </S.Circle>
                  <S.AccountInfo>
                    <p className="c1">{account.accountName}</p>
                    <p className="c2">{account.accountBalance}</p>
                  </S.AccountInfo>
                  <S.Check index={index} checked={checked}>
                    <img src={check} alt="check" />
                  </S.Check>
                </S.PersonButton>
              );
            })}
          </S.SenderBlock>
        </S.DepositBlock>

        <Button onClick={() => ResultBtn()} Send={true}>
          보내기
        </Button>
      </Template>
    </>
  );
}

export default Deposit;
