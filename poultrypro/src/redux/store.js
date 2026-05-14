import { configureStore } from '@reduxjs/toolkit'
import batchReducer from './poultrySlice'
import feedReducer from './feedSlice'
import salesReducer from './salesSlice'
import expenseReducer from './expenseSlice'
import vaccinationReducer from './vaccinationSlice'
export const store = configureStore({
  reducer: {
    batches: batchReducer,
    feed: feedReducer,
    sales: salesReducer,
    expenses: expenseReducer,
    vaccinations: vaccinationReducer,
  },
})
