import getLevel from '../user';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call getLevel', () => {
  fetchData.mockReturnValue(JSON.stringify({}));
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('should getLevel return ok', () => {
  const response = { status: 'ok', level: 5 };
  fetchData.mockReturnValue(response);
  const result = getLevel(1);
  expect(result).toBe('Ваш текущий уровень: 5');
});

test('should getLevel return error', () => {
  const response = { status: 'error' };
  fetchData.mockReturnValue(response);
  const result = getLevel(1);
  expect(result).toBe('Информация об уровне временно недоступна');
});
