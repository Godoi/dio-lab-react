import React from 'react';
import { DisplayContainer, OperationLine, ResultLine } from './styles';

const Display = ({ value, operationString }) => {
  return (
    <DisplayContainer>
      <OperationLine>{operationString}</OperationLine>
      <ResultLine>{value}</ResultLine>
    </DisplayContainer>
  );  
}

export default Display;