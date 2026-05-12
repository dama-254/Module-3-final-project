import { configureStore } from '@reduxjs/toolkit'
import batchReducer from './poultrySlice'
import feedReducer from './feedSlice'
import salesReducer from './salesSlice'

export const store = configureStore({
  reducer: {
    batches: batchReducer,
    feed: feedReducer,
    sales: salesReducer,
  },
})
