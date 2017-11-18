/* global expect, test */

import funcDist from '../dist';
import funcNormal from './';

const func = process.env.CI ? funcDist : funcNormal;

test('Default', () =>
  expect(func('/Apple/orange/pear/yellow-banana.js')).toBe('Apple: Orange: Pear: Yellow Banana'));

test('With dot prefix', () =>
  expect(func('./Apple/orange/pear/yellow-banana.js')).toBe('Apple: Orange: Pear: Yellow Banana'));

test('Space in folder name', () =>
  expect(func('/Apple/orange-pear/yellow-banana.js')).toBe('Apple: Orange Pear: Yellow Banana'));
