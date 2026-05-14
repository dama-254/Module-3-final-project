import axios from 'axios'
const URL = 'http://localhost:3001/vaccinations'
export const getVaccinations = () => axios.get(URL)
export const createVaccination = (data) => axios.post(URL, data)
export const updateVaccination = (id, data) => axios.patch(`${URL}/${id}`, data)
export const deleteVaccination = (id) => axios.delete(`${URL}/${id}`)
