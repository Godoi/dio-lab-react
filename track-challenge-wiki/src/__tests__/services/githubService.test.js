import { fetchRepositories } from '../../services/githubService';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe('githubService', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('deve buscar repositórios com sucesso', async () => {
    const mockData = [{ id: 1, full_name: 'octocat/repo1' }];
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const result = await fetchRepositories('octocat', 1);
    expect(result.repositories).toEqual(mockData);
    expect(result.totalPages).toBe(1);
  });

  it('deve lidar com erro de usuário não encontrado', async () => {
    fetchMock.mockRejectOnce(new Error('Network Error'));

    await expect(fetchRepositories('invaliduser', 1)).rejects.toThrow('Network Error');
  });

  it('deve extrair corretamente o total de páginas do header Link', async () => {
    const mockData = [{ id: 1, full_name: 'octocat/repo1' }];
    fetchMock.mockResponseOnce(JSON.stringify(mockData), {
      headers: {
        Link: '<https://api.github.com/user/repos?page=2>; rel="next", <https://api.github.com/user/repos?page=5>; rel="last"'
      }
    });

    const result = await fetchRepositories('octocat', 1);
    expect(result.totalPages).toBe(5);
  });
});