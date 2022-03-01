/* eslint-disable */
//액션 타입
const SET_MONEY = 'amount/SET_MONEY';

//액션 생성함수, export로 내보내기
export const setMoney = (data) => ({ type: SET_MONEY, data });

const initialState = {
  money: 0,
};

//reducer(이전상태, 액션)=> 다음상태
export default function amount(state = initialState, action) {
  switch (action.type) {
    case SET_MONEY:
      return {
        ...state,
        money: action.data,
      };
    default:
      return state;
  }
}
