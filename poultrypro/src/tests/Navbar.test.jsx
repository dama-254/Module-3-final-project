import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, test, expect } from 'vitest'
import Navbar from '../components/Navbar'

describe('Navbar', () => {
  test('renders brand name PoultryPro', () => {
    render(<MemoryRouter><Navbar /></MemoryRouter>)
    expect(screen.getByText('PoultryPro')).toBeInTheDocument()
  })
  test('renders Dashboard link', () => {
    render(<MemoryRouter><Navbar /></MemoryRouter>)
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
  })
  test('renders Batches link', () => {
    render(<MemoryRouter><Navbar /></MemoryRouter>)
    expect(screen.getByText('Batches')).toBeInTheDocument()
  })
  test('renders Sales link', () => {
    render(<MemoryRouter><Navbar /></MemoryRouter>)
    expect(screen.getByText('Sales')).toBeInTheDocument()
  })
  test('renders Feed link', () => {
    render(<MemoryRouter><Navbar /></MemoryRouter>)
    expect(screen.getByText('Feed')).toBeInTheDocument()
  })
})
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  