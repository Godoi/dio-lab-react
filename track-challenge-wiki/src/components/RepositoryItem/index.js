import React from 'react';
import { Item, Name, RemoveButton } from "./styles";


function RepositoryItem({ repo, onRemove }) {
  return (
    <Item>
      <Name>{repo.full_name}</Name>
      <RemoveButton onClick={() => onRemove(repo.full_name)}>
        Remover
      </RemoveButton>
    </Item>
  );
}

export default RepositoryItem;