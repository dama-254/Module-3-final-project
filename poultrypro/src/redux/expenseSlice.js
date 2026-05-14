import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const API = 'http://localhost:3001/expenses'
export const fetchExpenses = createAsyncThunk('expenses/fetchAll', async () => (await axios.get(API)).data)
export const addExpense = createAsyncThunk('expenses/add', async (data) => (await axios.post(API, { ...data, id: Date.now().toString() })).data)
export const updateExpense = createAsyncThunk('expenses/update', async ({ id, data }) => (await axios.patch(`${API}/${id}`, data)).data)
export const deleteExpense = createAsyncThunk('expenses/delete', async (id) => { await axios.delete(`${API}/${id}`); return id })
const expenseSlice = createSlice({
  name: 'expenses',
  initialState: { items: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExpenses.pending, (s) => { s.loading = true })
      .addCase(fetchExpenses.fulfilled, (s, a) => { s.loading = false; s.items = a.payload })
      .addCase(fetchExpenses.rejected, (s) => { s.loading = false; s.error = 'Failed to load' })
      .addCase(addExpense.fulfilled, (s, a) => { s.items.push(a.payload) })
      .addCase(updateExpense.fulfilled, (s, a) => { const i = s.items.findIndex(x => x.id === a.payload.id); if (i !== -1) s.items[i] = a.payload })
      .addCase(deleteExpense.fulfilled, (s, a) => { s.items = s.items.filter(x => x.id !== a.payload) })
  },
})
export default expenseSlice.reducer