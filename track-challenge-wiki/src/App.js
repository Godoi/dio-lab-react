import React, { useState } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import SearchBar from './components/SearchBar';
import RepositoryList from './components/RepositoryList';
import Pagination from './components/Pagination';
import { fetchRepositories } from './services/githubService';
import { getCachedRepositories, setCachedRepositories } from './services/cacheService';

function App() {
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [username, setUsername] = useState('');

  const handleSearch = async (inputUsername) => {
    setUsername(inputUsername);
    setCurrentPage(1);
    const cached = getCachedRepositories(inputUsername, 1);

    if (cached) {
      setRepositories(cached.repositories);
      setTotalPages(cached.totalPages);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const { repositories: data, totalPages } = await fetchRepositories(inputUsername, 1);
      setRepositories(data);
      setTotalPages(totalPages);
      setCachedRepositories(inputUsername, 1, { repositories: data, totalPages });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = async (newPage) => {
    const cached = getCachedRepositories(username, newPage);
    if (cached) {
      setRepositories(cached.repositories);
      setCurrentPage(newPage);
      return;
    }

    setIsLoading(true);

    try {
      const { repositories: data } = await fetchRepositories(username, newPage);
      setRepositories(data);
      setCurrentPage(newPage);
      setCachedRepositories(username, newPage, { repositories: data, totalPages });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemove = (repoName) => {
    setRepositories((prev) => prev.filter((repo) => repo.full_name !== repoName));
  };

  return (
    <>
      <GlobalStyle />
      <SearchBar onSearch={handleSearch} />
      {isLoading && <p>Carregando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!isLoading && !error && repositories.length > 0 && (
        <>
          <RepositoryList repositories={repositories} onRemove={handleRemove} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  );
}

export default App;