import styled from 'styled-components';

export const DepositBlock = styled.div`
  height: 62vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .num {
    font-size: 16px;
    color: gray;
  }
`;

export const RecipientBlock = styled.div`
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

export const RecipientCircle = styled.div`
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

export const SenderBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 12px;
`;

export const PersonButton = styled.button`
  height: 70px;
  display: flex;
  flex-direction: row;
  background: none;
  border: none;
  &:active {
    background: #f5fffa;
  }
`;
export const Circle = styled.div`
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

export const Check = styled.div`
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
export const AccountInfo = styled.div`
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
