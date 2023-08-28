import GameSavingLoader from '../GameSavingLoader';

test('test', async () => {
  const res = await GameSavingLoader.load();
  expect(res)
    .toEqual({
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1, name: 'Hitman', level: 10, points: 2000,
      },
    });
});
