import stripLife from '../strip-life';

test.each([
  ['healthy', { name: 'Маг', health: 90 }, 'healthy'],
  ['wounded', { name: 'Маг', health: 40 }, 'wounded'],
  ['critical', { name: 'Маг', health: 12 }, 'critical'],
  ['dead', { name: 'Маг', health: -1 }, 'dead'],
])('testing strip with %s srtip and %i life', (_, life, expected) => {
  const result = stripLife(life);
  expect(result).toBe(expected);
});
