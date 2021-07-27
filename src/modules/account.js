//액션 타입
const DEPOSIT_ACCOUNT = ' account/DEPOSIT_ACCOUNT';
const WITHDRAWAL_ACCOUNT = ' account/WITHDRAWAL_ACCOUNT';

//액션 생성함수, export로 내보내기
export const depositAccount = data => ({type: DEPOSIT_ACCOUNT, data});
export const withdrawalAccount = data => ({type: WITHDRAWAL_ACCOUNT, data});


const initialState = {
  deposit: [],
  withdrawal: [],
}

export default function account(state = initialState, action){
  switch(action.type){
    case DEPOSIT_ACCOUNT:
      return {
        ...state,
        deposit: action.data
      };
    case WITHDRAWAL_ACCOUNT:
      return {
        ...state,
        withdrawal: action.data
      };
    default:
      return state;
  }
}