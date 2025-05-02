import styled from 'styled-components';

export const DisplayContainer = styled.div`
  background-color: #000;
  color: #0f0;
  font-size: 1.2em;
  text-align: right;
  padding: 15px;
  min-height: 60px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const OperationLine = styled.span`
  display: block;
  font-size: 0.9em;
  opacity: 0.7;
  margin-bottom: 5px;
`;

export const ResultLine = styled.span`
  font-size: 2em;
`;