<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useState } from "react";
import { getVaccinations } from "../services/vaccinationApi";

function Vaccinations() {
  const [vaccinations, setVaccinations] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getVaccinations();
      setVaccinations(data);
    }

    load();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Vaccinations</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {vaccinations.map((v) => (
          <div
            key={v.id}
            className="bg-white p-4 rounded-xl shadow"
          >
            <h2 className="font-bold">{v.vaccineName}</h2>
            <p className="text-gray-600">Date: {v.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vaccinations;
=======
=======
cat > src/pages/Vaccination.jsx << 'EOF'
>>>>>>> 25e5c20 (done)
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVaccinations, addVaccination, updateVaccination, deleteVaccination } from '../redux/vaccinationSlice'
import VaccineCard from '../components/VaccineCard'
import SearchBar from '../components/SearchBar'
import FormModal from '../components/FormModal'
import LoadingSpinner from '../components/LoadingSpinner'

const empty = { date: '', batchId: '', vaccineName: '', dosage: '', method: 'Drinking water', notes: '' }

export default function Vaccination() {
  const dispatch = useDispatch()
  const { items, loading } = useSelector(s => s.vaccinations)
  const [search, setSearch] = useState('')
  const [modal, setModal] = useState(false)
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState(empty)
  useEffect(() => { dispatch(fetchVaccinations()) }, [dispatch])
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }))
  const openAdd = () => { setForm(empty); setEditing(null); setModal(true) }
  const openEdit = (v) => { setForm(v); setEditing(v.id); setModal(true) }
  const handleSave = () => {
    if (!form.vaccineName || !form.batchId) return
    if (editing) dispatch(updateVaccination({ id: editing, data: form }))
    else dispatch(addVaccination(form))
    setModal(false)
  }
  const filtered = items.filter(v => v.vaccineName?.toLowerCase().includes(search.toLowerCase()) || v.batchId?.toLowerCase().includes(search.toLowerCase()))
  const inp = { width: '100%', padding: '8px 10px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '8px', fontSize: '12px', color: '#fff', outline: 'none' }
  if (loading) return <LoadingSpinner />
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div><h1 style={{ fontSize: '18px', fontWeight: 700 }}>Vaccination Records</h1><p style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.35)', marginTop: '2px' }}>{items.length} records</p></div>
        <button onClick={openAdd} style={{ padding: '8px 16px', background: '#16a34a', color: '#fff', borderRadius: '10px', fontSize: '12px', fontWeight: 600, border: 'none', cursor: 'pointer' }}>+ Add Record</button>
      </div>
      <SearchBar value={search} onChange={setSearch} placeholder="Search by vaccine or batch..." />
      {filtered.map(v => <VaccineCard key={v.id} record={v} onEdit={openEdit} onDelete={(id) => { if (window.confirm('Delete?')) dispatch(deleteVaccination(id)) }} />)}
      {filtered.length === 0 && <p style={{ textAlign: 'center', padding: '40px', color: 'rgba(255,255,255,0.25)', fontSize: '12px' }}>No vaccination records found</p>}
      {modal && (
        <FormModal title={editing ? 'Edit Record' : 'Add Vaccination'} onClose={() => setModal(false)} onSubmit={handleSave}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div><label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Date</label><input type="date" style={inp} value={form.date} onChange={e => set('date', e.target.value)} /></div>
            <div><label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Batch ID</label><input style={inp} value={form.batchId} onChange={e => set('batchId', e.target.value)} placeholder="e.g. B-001" /></div>
          </div>
          <div><label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Vaccine Name</label><input style={inp} value={form.vaccineName} onChange={e => set('vaccineName', e.target.value)} placeholder="e.g. Newcastle LaSota" /></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div><label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Dosage</label><input style={inp} value={form.dosage} onChange={e => set('dosage', e.target.value)} placeholder="e.g. 1 drop/bird" /></div>
            <div><label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Method</label><select style={{ ...inp, backgroundColor: '#0a0f0a' }} value={form.method} onChange={e => set('method', e.target.value)}><option>Drinking water</option><option>Injection</option><option>Spray</option><option>Eye drop</option></select></div>
          </div>
        </FormModal>
      )}
    </div>
  )
}
<<<<<<< HEAD
>>>>>>> af2fad795637182c6fe61fcbf18e8c2e3e575839
=======
EOF
>>>>>>> 25e5c20 (done)
