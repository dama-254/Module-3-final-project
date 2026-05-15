import { describe, test, expect } from 'vitest'

describe('App basic setup', () => {
  test('vitest is working', () => {
    expect(1 + 1).toBe(2)
  })
  test('project name contains Poultry', () => {
    expect('PoultryPro Farm Management').toContain('Poultry')
  })
  test('basic string operations work', () => {
    expect('dashboard').toBe('dashboard')
  })
})
