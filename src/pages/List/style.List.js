import styled from 'styled-components';
import colors from 'styles/colors';

export const ListBlock = styled.div`
  display: flex;
  flex-direction: column;
  background: none;
  justify-content: space-around;
`;

export const PersonButton = styled.button`
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

export const AccountInfo = styled.div`
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
