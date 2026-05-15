import axios from 'axios'
const URL = 'http://localhost:3001/expenses'
export const getExpenses = () => axios.get(URL)
export const createExpense = (data) => axios.post(URL, data)
export const updateExpense = (id, data) => axios.patch(`${URL}/${id}`, data)
export const deleteExpense = (id) => axios.delete(`${URL}/${id}`)
