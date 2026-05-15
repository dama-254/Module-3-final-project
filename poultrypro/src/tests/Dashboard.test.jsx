import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { describe, test, expect, vi } from 'vitest'
import batchReducer from '../redux/poultrySlice'
import salesReducer from '../redux/salesSlice'
import feedReducer from '../redux/feedSlice'
import Dashboard from '../pages/Dashboard'

vi.mock('axios')

const makeStore = () => configureStore({
  reducer: { batches: batchReducer, sales: salesReducer, feed: feedReducer },
  preloadedState: {
    batches: { items: [{ id: '1', batchId: 'B-001', breed: 'Kenbro', birds: 500, health: 'Healthy' }], loading: false, error: null },
    sales: { items: [{ id: '1', type: 'Eggs', totalKsh: 3600, buyer: 'Market', date: '2026-05-12' }], loading: false, error: null },
    feed: { items: [], loading: false, error: null },
  }
})

describe('Dashboard page', () => {
  test('renders greeting text', () => {
    render(<Provider store={makeStore()}><MemoryRouter><Dashboard /></MemoryRouter></Provider>)
    expect(screen.getByText(/Good morning/i)).toBeInTheDocument()
  })
  test('renders Farm Manager text', () => {
    render(<Provider store={makeStore()}><MemoryRouter><Dashboard /></MemoryRouter></Provider>)
    expect(screen.getByText(/Farm Manager/i)).toBeInTheDocument()
  })
  test('renders Total Birds card', () => {
    render(<Provider store={makeStore()}><MemoryRouter><Dashboard /></MemoryRouter></Provider>)
    expect(screen.getByText('Total Birds')).toBeInTheDocument()
  })
  test('renders Total Revenue card', () => {
    render(<Provider store={makeStore()}><MemoryRouter><Dashboard /></MemoryRouter></Provider>)
    expect(screen.getByText('Total Revenue')).toBeInTheDocument()
  })
  test('renders Batch Overview section', () => {
    render(<Provider store={makeStore()}><MemoryRouter><Dashboard /></MemoryRouter></Provider>)
    expect(screen.getByText('Batch Overview')).toBeInTheDocument()
  })
})
