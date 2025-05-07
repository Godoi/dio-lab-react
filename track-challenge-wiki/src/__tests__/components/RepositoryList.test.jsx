import React from 'react';
import { render } from '@testing-library/react';
import RepositoryList from '../../components/RepositoryList';

test('deve renderizar os itens corretamente', () => {
  const repositories = [
    { id: 1, full_name: 'octocat/repo1' },
    { id: 2, full_name: 'octocat/repo2' },
  ];
  const onRemoveMock = jest.fn();
  const { getAllByRole } = render(
    <RepositoryList repositories={repositories} onRemove={onRemoveMock} />
  );

  expect(getAllByRole('listitem')).toHaveLength(repositories.length);
});