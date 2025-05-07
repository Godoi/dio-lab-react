import { getCachedRepositories, setCachedRepositories } from '../../services/cacheService';

describe('cacheService', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('deve armazenar e recuperar dados do cache', () => {
    setCachedRepositories('octocat', 1, { repositories: [{ id: 1 }], totalPages: 2 });
    const cached = getCachedRepositories('octocat', 1);
    expect(cached.repositories).toEqual([{ id: 1 }]);
    expect(cached.totalPages).toBe(2);
  });

  it('deve retornar null se o cache expirar', () => {
    setCachedRepositories('octocat', 1, { repositories: [{ id: 1 }], totalPages: 2 });
    jest.advanceTimersByTime(11 * 60 * 1000); // 11 minutos
    const cached = getCachedRepositories('octocat', 1);
    expect(cached).toBeNull();
  });
});