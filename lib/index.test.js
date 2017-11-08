import func from './';

test('Default', () =>
  expect(func('/Apple/orange/pear/yellow-banana.js')).toBe(
    'Apple: Orange: Pear: Yellow Banana'
  ));

test('Space in folder name', () =>
  expect(func('/Apple/orange-pear/yellow-banana.js')).toBe(
    'Apple: Orange Pear: Yellow Banana'
  ));
