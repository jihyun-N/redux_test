// 초기 상태값
const PLUS = "PLUS";
const MINUS = "MINUS";

export const plus = (payload) => {
  return {
    type: PLUS,
    payload,
  };
};

export const minus = (payload) => {
  return {
    type: MINUS,
    payload,
  };
};

const initialState = {
  number: 0,
};

// 리듀서
const calculator = (state = initialState, action) => {
  switch (action.type) {
    case PLUS:
      return {
        ...state,
        number: state.number + action.payload,
      };
    case MINUS:
      return {
        ...state,
        number: state.number - action.payload,
      };

    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default calculator;
