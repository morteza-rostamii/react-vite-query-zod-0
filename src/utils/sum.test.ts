
import {expect, test} from 'vitest'
import {sum} from './sum.ts'

test('add 1 + 2 to = 3', () => {
  expect(sum(1, 2)).toBe(3);
})

