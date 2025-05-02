import React from 'react';
import Button from '../Button';

import { ButtonGrid } from './styles';

const buttonValues = [
    ['7', '8', '9', '÷'],
    ['4', '5', '6', '×'],
    ['1', '2', '3', '-'],
    ['C', '0', '=', '+'],
  ];
  
  const ButtonPanel = ({ onClick }) => {
    return (
      <ButtonGrid>
        {buttonValues.flat().map((btn) => (
          <Button key={btn} value={btn} onClick={onClick} />
        ))}
      </ButtonGrid>
    );
  }
  
  export default ButtonPanel;