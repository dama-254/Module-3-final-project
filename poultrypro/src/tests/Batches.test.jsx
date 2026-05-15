import { describe, test, expect, vi } from 'vitest'
import { configureStore } from '@reduxjs/toolkit'
import batchReducer, { addBatch, deleteBatch, updateBatch, fetchBatches } from '../redux/poultrySlice'
import axios from 'axios'

vi.mock('axios')

const makeStore = () => configureStore({ reducer: { batches: batchReducer } })

const sample = { id: '1', batchId: 'B-001', breed: 'Kenbro', birds: 500, ageWeeks: 12, health: 'Healthy', layRate: 75 }

describe('poultrySlice (Batches)', () => {
  test('initial state has empty items', () => {
    const store = makeStore()
    expect(store.getState().batches.items).toHaveLength(0)
  })
  test('addBatch adds item to state', async () => {
    axios.post.mockResolvedValue({ data: sample })
    const store = makeStore()
    await store.dispatch(addBatch(sample))
    expect(store.getState().batches.items).toHaveLength(1)
    expect(store.getState().batches.items[0].breed).toBe('Kenbro')
  })
  test('deleteBatch removes item from state', async () => {
    axios.post.mockResolvedValue({ data: sample })
    axios.delete.mockResolvedValue({})
    const store = makeStore()
    await store.dispatch(addBatch(sample))
    await store.dispatch(deleteBatch('1'))
    expect(store.getState().batches.items).toHaveLength(0)
  })
  test('updateBatch patches item in state', async () => {
    axios.post.mockResolvedValue({ data: sample })
    axios.patch.mockResolvedValue({ data: { ...sample, breed: 'Leghorn' } })
    const store = makeStore()
    await store.dispatch(addBatch(sample))
    await store.dispatch(updateBatch({ id: '1', data: { breed: 'Leghorn' } }))
    expect(store.getState().batches.items[0].breed).toBe('Leghorn')
  })
  test('fetchBatches sets loading then fulfilled', async () => {
    axios.get.mockResolvedValue({ data: [sample] })
    const store = makeStore()
    await store.dispatch(fetchBatches())
    expect(store.getState().batches.items).toHaveLength(1)
    expect(store.getState().batches.loading).toBe(false)
  })
})
