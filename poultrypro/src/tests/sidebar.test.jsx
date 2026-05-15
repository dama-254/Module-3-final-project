import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, test, expect } from 'vitest'
import Sidebar from '../components/Sidebar'

describe('Sidebar', () => {
  test('renders Dashboard link', () => {
    render(<MemoryRouter><Sidebar /></MemoryRouter>)
    expect(screen.getByTitle('Dashboard')).toBeInTheDocument()
  })
  test('renders Batches link', () => {
    render(<MemoryRouter><Sidebar /></MemoryRouter>)
    expect(screen.getByTitle('Batches')).toBeInTheDocument()
  })
  test('renders Feed link', () => {
    render(<MemoryRouter><Sidebar /></MemoryRouter>)
    expect(screen.getByTitle('Feed')).toBeInTheDocument()
  })
  test('renders Sales link', () => {
    render(<MemoryRouter><Sidebar /></MemoryRouter>)
    expect(screen.getByTitle('Sales')).toBeInTheDocument()
  })
  test('renders Vaccination link', () => {
    render(<MemoryRouter><Sidebar /></MemoryRouter>)
    expect(screen.getByTitle('Vaccination')).toBeInTheDocument()
  })
})
