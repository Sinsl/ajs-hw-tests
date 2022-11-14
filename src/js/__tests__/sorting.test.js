import sort from '../sorting';

test('should strip', () => {
  const gamer = [
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'шут', health: 60 },
  ];
  const result = sort(gamer);
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'шут', health: 60 },
    { name: 'мечник', health: 10 },
  ];
  expect(result).toEqual(expected);
});
