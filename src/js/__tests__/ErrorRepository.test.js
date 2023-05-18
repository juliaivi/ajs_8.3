import ErrorRepository from '../ErrorRepository';

test('error display', () => {
  const error = new ErrorRepository();
  expect(error.translate(500)).toBe('Internal Server Error');
});

test('Unknown error', () => {
  const error = new ErrorRepository();
  expect(error.translate(502)).toBe('Unknown error');
});
