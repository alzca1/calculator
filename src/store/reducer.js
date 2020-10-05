import * as actionTypes from "./actions";

const initialState = {
  value: "0",
  pendingOperation: false,
};

const onConcatenate = (state, digit) => {
  const { value } = state;
  let nextValue = null;

  if (value !== "0") {
    nextValue = value + String(digit);
  }
  if (value === "0") {
    nextValue = String(digit);
  }

  if (value.includes(".") && digit === ".") {
    return {
      ...state,
    };
  }
  return {
    ...state,
    value: nextValue,
  };
};

const onClearDisplay = (state) => {
  return {
    ...state,
    value: "0",
  };
};

const onToggleSign = (state) => {
  console.log("hello")
  const { value } = state;
  let nextValue = null;
  value.charAt(0) === "-"
    ? (nextValue = value.slice(0, 1))
    : (nextValue = "-" + value);
  return {
    ...state,
    value: nextValue,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CONCATENATE:
      return onConcatenate(state, action.digit);
    case actionTypes.CLEAR:
      return onClearDisplay(state);
    case actionTypes.TOGGLESIGN:
      return onToggleSign(state);
    default:
      return state;
  }
};

export default reducer;
