import * as actionTypes from "./actions";

const initialState = {
  value: null,
  displayValue: "0",
  pendingOperand: false,
  symbol: null,
};

const onInputDigit = (state, digit) => {
  const { displayValue, pendingOperand } = state;
  if (pendingOperand) {
    return {
      ...state,
      displayValue: String(digit),
      pendingOperand: false,
    };
  } else {
    return {
      ...state,
      displayValue: displayValue === "0" ? String(digit) : displayValue + digit,
    };
  }
};

const onAddPeriod = (state) => {
  const { displayValue } = state;
  if (displayValue.indexOf(".") === -1) {
    return {
      ...state,
      displayValue: displayValue + ".",
    };
  }
  return state;
};

const onClearDisplay = (state) => {
  const {displayValue}  = state; 

  if(displayValue !== "0"){
    return {
      ...state,
      displayValue: "0",
    };
  }

  return{
    ...state, 
    displayValue: "0", 
    value: null
  }
  
};

const onToggleSign = (state) => {
  const { displayValue } = state;
  return {
    ...state,
    displayValue:
      displayValue.charAt(0) === "-"
        ? displayValue.substr(1)
        : "-" + displayValue,
  };
};

const onAddPercentage = (state) => {
  const { displayValue } = state;
  const newValue = parseFloat(displayValue) / 100;

  return {
    ...state,
    displayValue: newValue,
  };
};

const onOperating = (state, nextSymbol) => {
  const { displayValue, symbol, value } = state;

  const nextValue = parseFloat(displayValue);

  const operations = {
    "+": (previousValue, nextValue) => previousValue + nextValue,
    "-": (previousValue, nextValue) => previousValue - nextValue,
    "*": (previousValue, nextValue) => previousValue * nextValue,
    "/": (previousValue, nextValue) => previousValue / nextValue,
    "=": (previousValue, nextValue) => nextValue
  };

  if (value === null) {
   
    return {
      ...state,
      value: nextValue,
      pendingOperand: true, 
      symbol: nextSymbol
    };
  }
  

  if (symbol) {
    const currentValue = value || 0;
    const newValue = operations[symbol](currentValue, nextValue);

    return {
      ...state,
      value: newValue,
      displayValue: String(newValue),
      pendingOperand: true, 
      symbol: nextSymbol
    };
  }


};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INPUTDIGIT:
      return onInputDigit(state, action.digit);
    case actionTypes.PERIOD:
      return onAddPeriod(state);
    case actionTypes.CLEAR:
      return onClearDisplay(state);
    case actionTypes.TOGGLESIGN:
      return onToggleSign(state);
    case actionTypes.PERCENT:
      return onAddPercentage(state);
    case actionTypes.OPERATOR:
      return onOperating(state, action.symbol);
    default:
      return state;
  }
};

export default reducer;
