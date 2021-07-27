//액션 타입
const DEPOSIT_ACCOUNT = ' account/DEPOSIT_ACCOUNT';
const WITHDRAWAL_ACCOUNT = ' account/WITHDRAWAL_ACCOUNT';

//액션 생성함수, export로 내보내기
export const depositAccount = account => ({type: DEPOSIT_ACCOUNT, account});
export const WithdrawalAccount = account => ({type: WITHDRAWAL_ACCOUNT, account});


const initialState = {
  deposit: [],
  withdrawal: [],
}

export default function account(state = initialState, action){
  switch(action.type){
    case SELECT_ACCOUNT:
      return {
        ...state,
        deposit: action.deposit
      };
    case WITHDRAWAL_ACCOUNT:
      return {
        ...state,
        withdrawal: action.withdrawal
      };
    default:
      return state;
  }
}