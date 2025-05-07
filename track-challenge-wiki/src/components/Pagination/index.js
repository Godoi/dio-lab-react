import React from 'react';
import { Container, Button } from "./styles";

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <Container>
      <Button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
        Anterior
      </Button>
      <span>{`Página ${currentPage} de ${totalPages}`}</span>
      <Button disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
        Próxima
      </Button>
    </Container>
  );
}

export default Pagination;