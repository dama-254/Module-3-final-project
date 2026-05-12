import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API = 'http://localhost:3001/batches'

export const fetchBatches = createAsyncThunk('batches/fetchAll', async () => {
  const res = await axios.get(API)
  return res.data
})

export const addBatch = createAsyncThunk('batches/add', async (batch) => {
  const res = await axios.post(API, { ...batch, id: Date.now().toString() })
  return res.data
})

export const updateBatch = createAsyncThunk('batches/update', async ({ id, data }) => {
  const res = await axios.patch(`${API}/${id}`, data)
  return res.data
})

export const deleteBatch = createAsyncThunk('batches/delete', async (id) => {
  await axios.delete(`${API}/${id}`)
  return id
})

const batchSlice = createSlice({
  name: 'batches',
  initialState: { items: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBatches.pending, (s) => { s.loading = true })
      .addCase(fetchBatches.fulfilled, (s, a) => { s.loading = false; s.items = a.payload })
      .addCase(fetchBatches.rejected, (s) => { s.loading = false; s.error = 'Failed to load' })
      .addCase(addBatch.fulfilled, (s, a) => { s.items.push(a.payload) })
      .addCase(updateBatch.fulfilled, (s, a) => {
        const i = s.items.findIndex(b => b.id === a.payload.id)
        if (i !== -1) s.items[i] = a.payload
      })
      .addCase(deleteBatch.fulfilled, (s, a) => {
        s.items = s.items.filter(b => b.id !== a.payload)
      })
  },
})

export default batchSlice.reducer