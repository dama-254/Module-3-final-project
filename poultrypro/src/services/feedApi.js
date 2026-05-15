import axios from 'axios'
const URL = 'http://localhost:3001/feedRecords'
export const getFeed = () => axios.get(URL)
export const createFeed = (data) => axios.post(URL, data)
export const updateFeed = (id, data) => axios.patch(`${URL}/${id}`, data)
export const deleteFeed = (id) => axios.delete(`${URL}/${id}`)
