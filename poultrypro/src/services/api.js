import axios from 'axios'
const BASE = 'http://localhost:3001'
export const get = (path) => axios.get(`${BASE}${path}`)
export const post = (path, data) => axios.post(`${BASE}${path}`, data)
export const patch = (path, data) => axios.patch(`${BASE}${path}`, data)
export const del = (path) => axios.delete(`${BASE}${path}`)
