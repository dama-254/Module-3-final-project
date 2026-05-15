import { describe, test, expect, vi } from 'vitest'
import { configureStore } from '@reduxjs/toolkit'
import salesReducer, { addSale, deleteSale, updateSale, fetchSales } from '../redux/salesSlice'
import axios from 'axios'

vi.mock('axios')

const makeStore = () => configureStore({ reducer: { sales: salesReducer } })

const sample = { id: '1', date: '2026-05-12', type: 'Eggs', quantity: 200, unitPrice: 18, totalKsh: 3600, buyer: 'Nairobi Market' }

describe('salesSlice', () => {
  test('initial state has empty items', () => {
    const store = makeStore()
    expect(store.getState().sales.items).toHaveLength(0)
  })
  test('addSale adds item to state', async () => {
    axios.post.mockResolvedValue({ data: sample })
    const store = makeStore()
    await store.dispatch(addSale(sample))
    expect(store.getState().sales.items).toHaveLength(1)
    expect(store.getState().sales.items[0].buyer).toBe('Nairobi Market')
  })
  test('deleteSale removes item from state', async () => {
    axios.post.mockResolvedValue({ data: sample })
    axios.delete.mockResolvedValue({})
    const store = makeStore()
    await store.dispatch(addSale(sample))
    await store.dispatch(deleteSale('1'))
    expect(store.getState().sales.items).toHaveLength(0)
  })
  test('updateSale patches buyer in state', async () => {
    axios.post.mockResolvedValue({ data: sample })
    axios.patch.mockResolvedValue({ data: { ...sample, buyer: 'Updated Buyer' } })
    const store = makeStore()
    await store.dispatch(addSale(sample))
    await store.dispatch(updateSale({ id: '1', data: { buyer: 'Updated Buyer' } }))
    expect(store.getState().sales.items[0].buyer).toBe('Updated Buyer')
  })
  test('fetchSales populates items', async () => {
    axios.get.mockResolvedValue({ data: [sample] })
    const store = makeStore()
    await store.dispatch(fetchSales())
    expect(store.getState().sales.items).toHaveLength(1)
  })
})
