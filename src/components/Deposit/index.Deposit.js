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

  const additionalAccount = {
    accountBalance: '4300000',
    accountName: '우리은행',
    bankImageUrl: 'https://static.toss.im/tds/icon/png/4x/icn-bank-woori.png',
    bankName: '우리은행',
    createdAt: '2021-07-11T17:31:09.925Z',
    id: '60eb2add8024ffb704e5c123',
    _id: '60eb2add8024ffb704e5c123',
  };
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
        let newArr = res.data;
        newArr.push(additionalAccount);
        setAccounts(newArr);
      } catch (e) {
        setError(e);
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
    console.log(accounts[checked].accountBalance);
    console.log(money);
    if (Number(money) > Number(accounts[checked].accountBalance)) {
      alert('계좌의 잔액이 부족합니다. 확인 후 다시 이용해주세요.');
      return;
    } else {
      alert(`
      보낼 사람: ${depositPerson.accountHolder}
      보낼 계좌번호: ${depositPerson.accountNumber}
      보낼 금액: ${money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
      출금계좌:  ${accounts[checked].accountName}`);
      return;
    }
  };

  return (
    <>
      <Template>
        <Back />
        <S.DepositBlock>
          <S.RecipientBlock>
            <span>
              <span className="bold">{depositPerson.accountHolder}</span>님
              계좌로 <br />
              <span className="bold">
                {money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </span>
              을 보냅니다
            </span>
            <S.RecipientCircle>
              <img src={depositPerson.bankImageUrl} />
            </S.RecipientCircle>
            <span className="small margin_top">
              {depositPerson.bankName} {depositPerson.accountNumber}
            </span>
          </S.RecipientBlock>

          <S.SenderBlock>
            <span className="small margin_bottom">출금 계좌</span>
            {accounts.map((account, index) => {
              return (
                <S.PersonButton
                  key={account._id}
                  onClick={() => setChecked(index)}>
                  <S.Circle>
                    <img src={account.bankImageUrl} />
                  </S.Circle>
                  <S.AccountInfo>
                    <span className="accountName">{account.accountName}</span>
                    <span className="accountBalance">
                      {account.accountBalance
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      원
                    </span>
                  </S.AccountInfo>
                  <S.Check index={index} checked={checked}>
                    <img src={check} alt="check" />
                  </S.Check>
                </S.PersonButton>
              );
            })}
          </S.SenderBlock>
        </S.DepositBlock>
        <S.ButtonBlock>
          <Button onClick={() => ResultBtn()} Send={true}>
            보내기
          </Button>
        </S.ButtonBlock>
      </Template>
    </>
  );
}

export default Deposit;
