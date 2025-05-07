const CACHE_TTL = 10 * 60 * 1000; // 10 minutos

const cache = new Map();

export function getCachedRepositories(username, page) {
  const key = `${username}:${page}`;
  const cached = cache.get(key);

  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data;
  }

  return null;
}

export function setCachedRepositories(username, page, data) {
  const key = `${username}:${page}`;
  cache.set(key, {
    data,
    timestamp: Date.now(),
  });
}