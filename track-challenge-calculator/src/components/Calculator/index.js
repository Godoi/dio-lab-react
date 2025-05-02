import React, { useState } from 'react';
import Display from '../Display';
import ButtonPanel from '../ButtonPanel';
import calculate from '../../logic/calculatorLogic';

import { CalculatorContainer, CalculatorHeader } from './styles';

const Calculator = () => {
    const [state, setState] = useState({
      displayValue: '0',
      previousValue: null,
      operation: null,
      waitingForOperand: false,
      operationString: ''
    });
  
    const handleButtonClick = (buttonName) => {
      const newState = calculate(state, buttonName);
      setState(newState);
    };
  
    return (
      <CalculatorContainer>
      <CalculatorHeader>Calculadora</CalculatorHeader>
      <Display value={state.displayValue} operationString={state.operationString} />
      <ButtonPanel onClick={handleButtonClick} />
    </CalculatorContainer>
    );
}
  
export default Calculator;