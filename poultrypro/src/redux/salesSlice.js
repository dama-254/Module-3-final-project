import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const API = 'http://localhost:3001/sales'
export const fetchSales = createAsyncThunk('sales/fetchAll', async () => (await axios.get(API)).data)
export const addSale = createAsyncThunk('sales/add', async (data) => (await axios.post(API, { ...data, id: Date.now().toString(), totalKsh: data.quantity * data.unitPrice })).data)
export const updateSale = createAsyncThunk('sales/update', async ({ id, data }) => (await axios.patch(`${API}/${id}`, { ...data, totalKsh: data.quantity * data.unitPrice })).data)
export const deleteSale = createAsyncThunk('sales/delete', async (id) => { await axios.delete(`${API}/${id}`); return id })
const salesSlice = createSlice({
  name: 'sales',
  initialState: { items: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSales.pending, (s) => { s.loading = true })
      .addCase(fetchSales.fulfilled, (s, a) => { s.loading = false; s.items = a.payload })
      .addCase(fetchSales.rejected, (s) => { s.loading = false; s.error = 'Failed to load' })
      .addCase(addSale.fulfilled, (s, a) => { s.items.push(a.payload) })
      .addCase(updateSale.fulfilled, (s, a) => { const i = s.items.findIndex(x => x.id === a.payload.id); if (i !== -1) s.items[i] = a.payload })
      .addCase(deleteSale.fulfilled, (s, a) => { s.items = s.items.filter(x => x.id !== a.payload) })
  },
})
export default salesSlice.reducer
