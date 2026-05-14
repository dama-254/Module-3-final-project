import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFeed, addFeed, updateFeed, deleteFeed } from '../redux/feedSlice'
import FeedCard from '../components/FeedCard'
import SearchBar from '../components/SearchBar'
import FormModal from '../components/FormModal'
import LoadingSpinner from '../components/LoadingSpinner'

const empty = { date: '', batchId: '', feedType: '', quantityKg: '', costKsh: '', supplier: '' }

export default function FeedManagement() {
  const dispatch = useDispatch()
  const { items, loading } = useSelector(s => s.feed)
  const [search, setSearch] = useState('')
  const [modal, setModal] = useState(false)
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState(empty)
  useEffect(() => { dispatch(fetchFeed()) }, [dispatch])
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }))
  const openAdd = () => { setForm(empty); setEditing(null); setModal(true) }
  const openEdit = (f) => { setForm(f); setEditing(f.id); setModal(true) }
  const handleSave = () => {
    if (!form.date || !form.feedType || !form.quantityKg) return
    const data = { ...form, quantityKg: Number(form.quantityKg), costKsh: Number(form.costKsh) }
    if (editing) dispatch(updateFeed({ id: editing, data }))
    else dispatch(addFeed(data))
    setModal(false)
  }
  const filtered = items.filter(f => f.feedType?.toLowerCase().includes(search.toLowerCase()) || f.batchId?.toLowerCase().includes(search.toLowerCase()))
  const inp = { width: '100%', padding: '8px 10px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '8px', fontSize: '12px', color: '#fff', outline: 'none' }
  if (loading) return <LoadingSpinner />
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div><h1 style={{ fontSize: '18px', fontWeight: 700 }}>Feed Management</h1><p style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.35)', marginTop: '2px' }}>{items.length} records</p></div>
        <button onClick={openAdd} style={{ padding: '8px 16px', background: '#16a34a', color: '#fff', borderRadius: '10px', fontSize: '12px', fontWeight: 600, border: 'none', cursor: 'pointer' }}>+ Add Record</button>
      </div>
      <SearchBar value={search} onChange={setSearch} placeholder="Search by feed type or batch..." />
      {filtered.map(f => <FeedCard key={f.id} record={f} onEdit={openEdit} onDelete={(id) => { if (window.confirm('Delete?')) dispatch(deleteFeed(id)) }} />)}
      {filtered.length === 0 && <p style={{ textAlign: 'center', padding: '40px', color: 'rgba(255,255,255,0.25)', fontSize: '12px' }}>No records found</p>}
      {modal && (
        <FormModal title={editing ? 'Edit Record' : 'Add Feed Record'} onClose={() => setModal(false)} onSubmit={handleSave}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div><label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Date</label><input type="date" style={inp} value={form.date} onChange={e => set('date', e.target.value)} /></div>
            <div><label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Batch ID</label><input style={inp} value={form.batchId} onChange={e => set('batchId', e.target.value)} placeholder="e.g. B-001" /></div>
          </div>
          <div><label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Feed Type</label><input style={inp} value={form.feedType} onChange={e => set('feedType', e.target.value)} placeholder="e.g. Layer mash" /></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div><label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Quantity (kg)</label><input type="number" style={inp} value={form.quantityKg} onChange={e => set('quantityKg', e.target.value)} /></div>
            <div><label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Cost (KSh)</label><input type="number" style={inp} value={form.costKsh} onChange={e => set('costKsh', e.target.value)} /></div>
          </div>
          <div><label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Supplier</label><input style={inp} value={form.supplier} onChange={e => set('supplier', e.target.value)} placeholder="e.g. AgroFeed Ltd" /></div>
        </FormModal>
      )}
    </div>
  )
}
