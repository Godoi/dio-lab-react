import { ButtonContainer } from './styles';

const Button = ({value, onClick}) => {
    const isOperator = ['÷', '×', '-', '+'].includes(value);
    const isEqual = value === '=';
  
    return (
      <ButtonContainer
        onClick={() => onClick(value)}
        isOperator={isOperator}
        isEqual={isEqual}
      >
        {value}
      </ButtonContainer>
    );
  }
  
  export default Button;