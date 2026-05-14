import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const API = 'http://localhost:3001/feedRecords'
export const fetchFeed = createAsyncThunk('feed/fetchAll', async () => (await axios.get(API)).data)
export const addFeed = createAsyncThunk('feed/add', async (data) => (await axios.post(API, { ...data, id: Date.now().toString() })).data)
export const updateFeed = createAsyncThunk('feed/update', async ({ id, data }) => (await axios.patch(`${API}/${id}`, data)).data)
export const deleteFeed = createAsyncThunk('feed/delete', async (id) => { await axios.delete(`${API}/${id}`); return id })
const feedSlice = createSlice({
  name: 'feed',
  initialState: { items: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeed.pending, (s) => { s.loading = true })
      .addCase(fetchFeed.fulfilled, (s, a) => { s.loading = false; s.items = a.payload })
      .addCase(fetchFeed.rejected, (s) => { s.loading = false; s.error = 'Failed to load' })
      .addCase(addFeed.fulfilled, (s, a) => { s.items.push(a.payload) })
      .addCase(updateFeed.fulfilled, (s, a) => { const i = s.items.findIndex(x => x.id === a.payload.id); if (i !== -1) s.items[i] = a.payload })
      .addCase(deleteFeed.fulfilled, (s, a) => { s.items = s.items.filter(x => x.id !== a.payload) })
  },
})
export default feedSlice.reducer
