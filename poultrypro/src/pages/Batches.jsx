
import { useEffect, useState } from "react";
import { getBatches } from "../services/batchApi";

function Batches() {
  const [batches, setBatches] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getBatches();
      setBatches(data);
    }

    load();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Batches</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {batches.map((batch) => (
          <div
            key={batch.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg"
          >
            <h2 className="font-bold">{batch.batchName}</h2>
            <p className="text-gray-600">Type: {batch.type}</p>
            <p className="text-gray-600">Quantity: {batch.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Batches;
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBatches, addBatch, updateBatch, deleteBatch } from '../redux/poultrySlice'
import SearchBar from '../components/SearchBar'
import FormModal from '../components/FormModal'
import LoadingSpinner from '../components/LoadingSpinner'

const empty = { batchId: '', breed: '', birds: '', ageWeeks: '', health: 'Healthy', layRate: '' }

export default function Batches() {
  const dispatch = useDispatch()
  const { items, loading } = useSelector(s => s.batches)
  const [search, setSearch] = useState('')
  const [modal, setModal] = useState(false)
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState(empty)
  useEffect(() => { dispatch(fetchBatches()) }, [dispatch])
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }))
  const openAdd = () => { setForm(empty); setEditing(null); setModal(true) }
  const openEdit = (b) => { setForm(b); setEditing(b.id); setModal(true) }
  const handleSave = () => {
    if (!form.batchId || !form.breed || !form.birds) return
    const data = { ...form, birds: Number(form.birds), ageWeeks: Number(form.ageWeeks), layRate: Number(form.layRate) }
    if (editing) dispatch(updateBatch({ id: editing, data }))
    else dispatch(addBatch({ ...data, dateAdded: new Date().toISOString().split('T')[0] }))
    setModal(false)
  }
  const filtered = items.filter(b => b.batchId?.toLowerCase().includes(search.toLowerCase()) || b.breed?.toLowerCase().includes(search.toLowerCase()))
  const inp = { width: '100%', padding: '8px 10px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '8px', fontSize: '12px', color: '#fff', outline: 'none' }
  if (loading) return <LoadingSpinner />
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div><h1 style={{ fontSize: '18px', fontWeight: 700 }}>Chicken Batches</h1><p style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.35)', marginTop: '2px' }}>{items.length} batches · {items.reduce((s, b) => s + Number(b.birds || 0), 0).toLocaleString()} birds</p></div>
        <button onClick={openAdd} style={{ padding: '8px 16px', background: '#16a34a', color: '#fff', borderRadius: '10px', fontSize: '12px', fontWeight: 600, border: 'none', cursor: 'pointer' }}>+ Add Batch</button>
      </div>
      <SearchBar value={search} onChange={setSearch} placeholder="Search by ID or breed..." />
      <div style={{ background: '#0d1f0d', border: '1px solid rgba(134,239,172,0.09)', borderRadius: '14px', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead><tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>{['Batch ID','Breed','Birds','Age (wks)','Health','Actions'].map(h => <th key={h} style={{ textAlign: 'left', fontSize: '10.5px', color: 'rgba(255,255,255,0.35)', fontWeight: 500, padding: '10px 14px', textTransform: 'uppercase' }}>{h}</th>)}</tr></thead>
          <tbody>
            {filtered.map(b => (
              <tr key={b.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <td style={{ padding: '10px 14px', fontSize: '12px', color: '#86efac', fontFamily: 'monospace' }}>{b.batchId}</td>
                <td style={{ padding: '10px 14px', fontSize: '12px' }}>{b.breed}</td>
                <td style={{ padding: '10px 14px', fontSize: '12px' }}>{Number(b.birds).toLocaleString()}</td>
                <td style={{ padding: '10px 14px', fontSize: '12px' }}>{b.ageWeeks}</td>
                <td style={{ padding: '10px 14px', fontSize: '12px', color: b.health === 'Healthy' ? '#86efac' : b.health === 'Monitor' ? '#fde047' : '#fca5a5' }}>{b.health}</td>
                <td style={{ padding: '10px 14px', display: 'flex', gap: '6px' }}>
                  <button onClick={() => openEdit(b)} style={{ padding: '3px 10px', background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)', color: '#93c5fd', borderRadius: '6px', fontSize: '11px', cursor: 'pointer' }}>Edit</button>
                  <button onClick={() => { if (window.confirm('Delete?')) dispatch(deleteBatch(b.id)) }} style={{ padding: '3px 10px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', color: '#fca5a5', borderRadius: '6px', fontSize: '11px', cursor: 'pointer' }}>Delete</button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && <tr><td colSpan={6} style={{ textAlign: 'center', padding: '40px', color: 'rgba(255,255,255,0.25)', fontSize: '12px' }}>No batches found</td></tr>}
          </tbody>
        </table>
      </div>
      {modal && (
        <FormModal title={editing ? 'Edit Batch' : 'Add Batch'} onClose={() => setModal(false)} onSubmit={handleSave}>
          <div><label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Batch ID</label><input style={inp} value={form.batchId} onChange={e => set('batchId', e.target.value)} placeholder="e.g. B-005" /></div>
          <div><label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Breed</label><input style={inp} value={form.breed} onChange={e => set('breed', e.target.value)} placeholder="e.g. Kenbro" /></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div><label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Birds</label><input type="number" style={inp} value={form.birds} onChange={e => set('birds', e.target.value)} /></div>
            <div><label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Age (weeks)</label><input type="number" style={inp} value={form.ageWeeks} onChange={e => set('ageWeeks', e.target.value)} /></div>
          </div>
          <div><label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Health</label>
            <select style={{ ...inp, backgroundColor: '#0a0f0a' }} value={form.health} onChange={e => set('health', e.target.value)}>
              <option>Healthy</option><option>Monitor</option><option>At risk</option>
            </select>
          </div>
        </FormModal>
      )}
    </div>
  )
}

