import { describe, test, expect } from 'vitest'

describe('Basic setup', () => {
  test('vitest is working', () => {
    expect(1 + 1).toBe(2)
  })
  test('project name is correct', () => {
    expect('Poultry Farm Desk').toContain('Poultry')
  })
})
