import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../../components/Pagination';

test('deve chamar onPageChange ao clicar nos botões', () => {
  const onPageChangeMock = jest.fn();
  render(<Pagination currentPage={2} totalPages={5} onPageChange={onPageChangeMock} />);

  fireEvent.click(screen.getByText('Anterior'));
  expect(onPageChangeMock).toHaveBeenCalledWith(1);

  fireEvent.click(screen.getByText('Próxima'));
  expect(onPageChangeMock).toHaveBeenCalledWith(3);
});