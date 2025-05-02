// App.js
import React from 'react';
import styled from 'styled-components';
import Calculator from './components/Calculator';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

function App() {
  return (
    <Container>
      <Calculator />
    </Container>
  );
}

export default App;
