import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../../components/SearchBar';

test('deve chamar onSearch com o nome do usuário', () => {
  const onSearchMock = jest.fn();
  render(<SearchBar onSearch={onSearchMock} />);

  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'octocat' } });
  fireEvent.click(screen.getByRole('button'));

  expect(onSearchMock).toHaveBeenCalledWith('octocat');
});