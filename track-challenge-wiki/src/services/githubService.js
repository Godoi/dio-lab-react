export async function fetchRepositories(username, page = 1, perPage = 10) {
  const url = `https://api.github.com/users/${username}/repos?page=${page}&per_page=${perPage}`;
  const response = await fetch(url);

  if (!response.ok) throw new Error('Usuário não encontrado.');

  const data = await response.json();

  const linkHeader = response.headers.get('Link');
  let totalPages = 1;

  if (linkHeader) {
    const matches = linkHeader.match(/page=(\d+)>; rel="last"/);
    if (matches) totalPages = parseInt(matches[1], 10);
  }

  return { repositories: data, totalPages };
}