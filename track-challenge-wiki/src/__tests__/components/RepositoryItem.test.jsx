import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RepositoryItem from '../../components/RepositoryItem';

test('deve chamar onRemove ao clicar no botão', () => {
  const onRemoveMock = jest.fn();
  render(<RepositoryItem repo={{ full_name: 'octocat/repo1' }} onRemove={onRemoveMock} />);
  fireEvent.click(screen.getByRole('button'));
  expect(onRemoveMock).toHaveBeenCalledWith('octocat/repo1');
});