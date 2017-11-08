import func from './';

test('Default', () =>
  expect(func({ path: '/Apple/orange/pear/yellow-banana.js' })).toBe(
    'Apple: Orange: Pear: Yellow Banana'
  ));

test('Space in folder name', () =>
  expect(func({ path: '/Apple/orange-pear/yellow-banana.js' })).toBe(
    'Apple: Orange Pear: Yellow Banana'
  ));
