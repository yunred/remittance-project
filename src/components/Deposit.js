/* eslint-disable */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Template from '../common/Template';
import Back from '../common/Back';
import Button from '../common/ButtonStyle';
import check from '../check.png';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { withdrawalAccount } from '../modules/account';

const DepositBlock = styled.div`
  height: 62vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .num {
    font-size: 16px;
    color: gray;
  }
`;

const RecipientBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: none;
  justify-content: space-between;
  padding: 12px;

  p {
    font-size: 20px;
  }

  span {
    font-weight: bold;
  }
`;

const RecipientCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: 1px solid #ced4da;
  display: flex;
  align: left;
  align-items: center;
  justify-content: center;
  margin: auto 8px;

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
  }
`;

const SenderBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 12px;
`;

const PersonButton = styled.button`
  height: 70px;
  display: flex;
  flex-direction: row;
  background: none;
  border: none;
  &:active {
    background: #f5fffa;
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

const Check = styled.div`
  width: 48px;
  height: 48px;
  border: 1px none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 8px;
  margin-left: auto;

  img {
    width: 32px;
    height: 32px;
    object-fit: cover;
    visibility: ${(props) =>
      props.index === props.checked ? 'visible' : 'hidden'};
  }
`;
const AccountInfo = styled.div`
  height: 50px;
  background: none;
  text-align: left;
  padding: 8px 16px;
  line-height: 5%;
  .c1 {
    font-size: 18px;
    font-weight: bold;
  }

  .c2 {
    font-size: 14px;
    color: #a9a9a9;
  }
`;

function Deposit({ history }) {
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
        <Back history={history} />
        <DepositBlock>
          <RecipientBlock>
            <p>
              <span>{depositPerson.accountHolder}</span>님 계좌로 <br />
              <span>
                {money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </span>{' '}
              을 보냅니다
            </p>
            <RecipientCircle>
              <img src={depositPerson.bankImageUrl} />
            </RecipientCircle>
            <p className="num">
              {depositPerson.bankName} {depositPerson.accountNumber}
            </p>
          </RecipientBlock>

          <SenderBlock>
            <p className="num">출금 계좌</p>
            {accounts.map((account, index) => {
              return (
                <PersonButton
                  key={account._id}
                  onClick={() => setChecked(index)}>
                  <Circle>
                    <img src={account.bankImageUrl} />
                  </Circle>
                  <AccountInfo>
                    <p className="c1">{account.accountName}</p>
                    <p className="c2">{account.accountBalance}</p>
                  </AccountInfo>
                  <Check index={index} checked={checked}>
                    <img src={check} alt="check" />
                  </Check>
                </PersonButton>
              );
            })}
          </SenderBlock>
        </DepositBlock>

        <Button onClick={() => ResultBtn()} Send={true}>
          보내기
        </Button>
      </Template>
    </>
  );
}

export default Deposit;
