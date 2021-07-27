//액션 타입
const SET_MONEY = 'amount/SET_MONEY';

//액션 생성함수, export로 내보내기
export const setMoney = money => ({type: SET_MONEY, money});


const initialState = {
  money: 0,
}

//reducer(이전상태, 액션)=> 다음상태
export default function amount(state = initialState, action){
  switch(action.type){
    case SET_MONEY:
      return {
        ...state,
        money: action.money
      };
      default:
        return state;
  }
}