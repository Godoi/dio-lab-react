import React, { useState } from 'react';
import { Container, Input, Button } from "./styles";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome do usuário"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit">Buscar</Button>
      </form>
    </Container>
  );
}

export default SearchBar;