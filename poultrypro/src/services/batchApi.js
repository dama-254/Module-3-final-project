import axios from 'axios'
const URL = 'http://localhost:3001/batches'
export const getBatches = () => axios.get(URL)
export const createBatch = (data) => axios.post(URL, data)
export const updateBatch = (id, data) => axios.patch(`${URL}/${id}`, data)
export const deleteBatch = (id) => axios.delete(`${URL}/${id}`)
