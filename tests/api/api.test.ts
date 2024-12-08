import { test, expect } from '@playwright/test';

test.describe('GET запросы', () => {
  test('GET /posts возвращает массив с элементами', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts');
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data.length).toBeGreaterThan(0);
  });
});

test('GET /comments?postId={parameter} проверяет фильтр', async ({ request }) => {
  const parameter = 1; // Пример параметра
  const response = await request.get(`https://jsonplaceholder.typicode.com/comments?postId=${parameter}`);
  expect(response.ok()).toBeTruthy();
  const data = await response.json();

  expect(data.length).toBeGreaterThan(0);
  for (const item of data) {
    expect(item.postId).toBe(parameter);
  }
});


test('POST /posts возвращает созданный объект', async ({ request }) => {
  const postData = { title: 'test title', body: 'test body', userId: 1 };
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: postData,
  });

  expect(response.ok()).toBeTruthy();
  const data = await response.json();

  expect(data).toMatchObject({
    id: 101,
    ...postData,
  });
});

