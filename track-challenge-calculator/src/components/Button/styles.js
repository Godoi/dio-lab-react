import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 20px;
  font-size: 1.2em;
  border: none;
  cursor: pointer;
  background-color: ${(props) =>
    props.isOperator ? '#ff9500' : props.isEqual ? '#34c759' : '#f0f0f0'};
  color: ${(props) => (props.isOperator || props.isEqual ? 'white' : 'black')};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.isOperator ? '#e08900' : props.isEqual ? '#28c050' : '#ddd'};
  }
`;