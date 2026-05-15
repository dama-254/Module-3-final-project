import axios from 'axios'
const URL = 'http://localhost:3001/sales'
export const getSales = () => axios.get(URL)
export const createSale = (data) => axios.post(URL, data)
export const updateSale = (id, data) => axios.patch(`${URL}/${id}`, data)
export const deleteSale = (id) => axios.delete(`${URL}/${id}`)
