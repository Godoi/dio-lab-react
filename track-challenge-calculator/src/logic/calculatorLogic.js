export default function calculate(state, buttonName) {
  const {
    displayValue,
    previousValue,
    operation,
    waitingForOperand,
    operationString,
  } = state;

  if (buttonName === 'C') {
    return {
      ...state,
      displayValue: '0',
      previousValue: null,
      operation: null,
      waitingForOperand: false,
      operationString: '',
    };
  }

  if (buttonName === '=') {
    if (!operation || previousValue === null) return state;

    const result = performCalculation(previousValue, displayValue, operation);
    return {
      ...state,
      displayValue: String(result),
      previousValue: String(result),
      operation: null,
      waitingForOperand: false,
      operationString: `${operationString} = ${result}`,
    };
  }

  const isOperator = ['+', '−', '×', '÷'].includes(buttonName);
  if (isOperator) {
    if (previousValue === null) {
      return {
        ...state,
        operation: buttonName,
        previousValue: displayValue,
        waitingForOperand: true,
        operationString: `${displayValue} ${buttonName}`,
      };
    } else if (waitingForOperand) {
      return {
        ...state,
        operation: buttonName,
        operationString: `${operationString.slice(0, -1)}${buttonName}`,
      };
    } else {
      const result = performCalculation(previousValue, displayValue, operation);
      return {
        ...state,
        displayValue: String(result),
        previousValue: String(result),
        operation: buttonName,
        waitingForOperand: true,
        operationString: `${operationString} ${buttonName}`,
      };
    }
  }

  if (waitingForOperand) {
    return {
      ...state,
      displayValue: buttonName,
      waitingForOperand: false,
      operationString: operationString + buttonName,
    };
  }

  if (displayValue === '0') {
    return {
      ...state,
      displayValue: buttonName,
      operationString: operationString + buttonName,
    };
  }

  return {
    ...state,
    displayValue: displayValue + buttonName,
    operationString: operationString + buttonName,
  };

  function performCalculation(leftOperand, rightOperand, operationSymbol) {
    const [leftNumber, rightNumber] = [parseFloat(leftOperand), parseFloat(rightOperand)];
    
    switch (operationSymbol) {
      case '+':
        return leftNumber + rightNumber;
      case '−':
        return leftNumber - rightNumber;
      case '×':
        return leftNumber * rightNumber;
      case '÷':
        return rightNumber !== 0 ? leftNumber / rightNumber : Infinity;
      default:
        return rightNumber;
    }
  }
}