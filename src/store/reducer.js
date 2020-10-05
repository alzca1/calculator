import * as actionTypes from "./actions";

const initialState = {
  value: 0,
};

const onConcatenate = (state, digit) => {
    
  return {
    ...state,
    value: digit,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CONCATENATE:
      return onConcatenate(state, action.digit);

    default:
      return state;
  }
};

export default reducer;
