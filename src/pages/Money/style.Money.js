import styled from 'styled-components';
import colors from 'styles/colors';

export const MoneyBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 30px;
  align-items: center;
  text-align: center;
  margin: 0 auto;

  .less {
    visibility: hidden;
  }
  .excess {
    font-weight: normal;
    visibility: visible;
    color: ${colors.gray200};
  }
`;

export const AmountSpan = styled.span`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  @keyframes Down {
    0% {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 10px;
  animation: Down 0.3s;
`;
export const WarningSpan = styled.span`
  font-size: 14px;
`;

export const ButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 54px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
`;
export const ButtonRow = styled.div`
  margin-bottom: 8px;
`;
