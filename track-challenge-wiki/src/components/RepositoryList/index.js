import React from 'react';
import RepositoryItem from '../RepositoryItem';
import { List } from "./styles";

function RepositoryList({ repositories, onRemove }) {
  return (
    <List>
      {repositories.map(repo => (
        <RepositoryItem key={repo.id} repo={repo} onRemove={onRemove} />
      ))}
    </List>
  );
}

export default RepositoryList;