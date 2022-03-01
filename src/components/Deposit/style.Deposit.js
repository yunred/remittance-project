import styled from 'styled-components';
import colors from 'styles/colors';

export const DepositBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .small {
    font-size: 16px;
    color: ${colors.gray200};
  }
`;

export const RecipientBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: none;
  justify-content: space-between;
  padding: 12px;
  margin-bottom: 180px;
  span {
    font-size: 20px;
  }

  .bold {
    font-weight: 700;
  }
  .margin_top {
    margin-top: 8px;
  }
`;

export const RecipientCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: 1px solid #ced4da;
  display: flex;
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

  .margin_bottom {
    margin-bottom: 8px;
  }
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
  display: flex;
  flex-direction: column;
  height: 50px;
  background: none;
  text-align: left;
  padding: 14px 16px;
  line-height: 1;
  .accountName {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 6px;
  }

  .accountBalance {
    font-size: 14px;
    color: ${colors.gray200};
  }
`;
