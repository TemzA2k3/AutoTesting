import { test, expect } from '@playwright/test';

test.describe('GraphQL запросы', () => {
  test('GraphQL: выбрать эпизоды с подстрокой "Rick"', async ({ request }) => {
    const query = `
      query {
        episodes(filter: { name: "Rick" }) {
          results {
            name
          }
        }
      }
    `;

    const response = await request.post('https://rickandmortyapi.com/graphql', {
      data: { query },
    });

    expect(response.ok()).toBeTruthy();

    const { data } = await response.json();
    const episodes = data.episodes.results;

    expect(episodes.length).toBeGreaterThan(0);

    for (const episode of episodes) {
      expect(episode.name.toLowerCase()).toContain('rick');
    }
  });
});
