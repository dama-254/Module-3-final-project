import { describe, test, expect, vi, beforeEach } from 'vitest'
import axios from 'axios'

vi.mock('axios')

describe('API service functions', () => {
  beforeEach(() => { vi.clearAllMocks() })

  test('axios.get can be called for batches endpoint', async () => {
    axios.get.mockResolvedValue({ data: [] })
    const res = await axios.get('http://localhost:3001/batches')
    expect(axios.get).toHaveBeenCalledWith('http://localhost:3001/batches')
    expect(res.data).toEqual([])
  })

  test('axios.post can be called for sales endpoint', async () => {
    const newSale = { id: '1', buyer: 'Market', totalKsh: 3600 }
    axios.post.mockResolvedValue({ data: newSale })
    const res = await axios.post('http://localhost:3001/sales', newSale)
    expect(res.data.buyer).toBe('Market')
  })

  test('axios.patch can be called to update a batch', async () => {
    axios.patch.mockResolvedValue({ data: { id: '1', breed: 'Leghorn' } })
    const res = await axios.patch('http://localhost:3001/batches/1', { breed: 'Leghorn' })
    expect(res.data.breed).toBe('Leghorn')
  })

  test('axios.delete can be called to remove a record', async () => {
    axios.delete.mockResolvedValue({})
    await axios.delete('http://localhost:3001/feedRecords/1')
    expect(axios.delete).toHaveBeenCalledWith('http://localhost:3001/feedRecords/1')
  })

  test('axios.get can be called for feed records', async () => {
    axios.get.mockResolvedValue({ data: [{ id: '1', feedType: 'Layer mash' }] })
    const res = await axios.get('http://localhost:3001/feedRecords')
    expect(res.data[0].feedType).toBe('Layer mash')
  })
})
