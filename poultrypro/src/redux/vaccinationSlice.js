import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const API = 'http://localhost:3001/vaccinations'
export const fetchVaccinations = createAsyncThunk('vaccinations/fetchAll', async () => (await axios.get(API)).data)
export const addVaccination = createAsyncThunk('vaccinations/add', async (data) => (await axios.post(API, { ...data, id: Date.now().toString() })).data)
export const updateVaccination = createAsyncThunk('vaccinations/update', async ({ id, data }) => (await axios.patch(`${API}/${id}`, data)).data)
export const deleteVaccination = createAsyncThunk('vaccinations/delete', async (id) => { await axios.delete(`${API}/${id}`); return id })
const vaccinationSlice = createSlice({
  name: 'vaccinations',
  initialState: { items: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVaccinations.pending, (s) => { s.loading = true })
      .addCase(fetchVaccinations.fulfilled, (s, a) => { s.loading = false; s.items = a.payload })
      .addCase(fetchVaccinations.rejected, (s) => { s.loading = false; s.error = 'Failed to load' })
      .addCase(addVaccination.fulfilled, (s, a) => { s.items.push(a.payload) })
      .addCase(updateVaccination.fulfilled, (s, a) => { const i = s.items.findIndex(x => x.id === a.payload.id); if (i !== -1) s.items[i] = a.payload })
      .addCase(deleteVaccination.fulfilled, (s, a) => { s.items = s.items.filter(x => x.id !== a.payload) })
  },
})
export default vaccinationSlice.reducer
