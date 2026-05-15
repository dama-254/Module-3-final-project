<<<<<<< HEAD
cat > src/pages/Sales.jsx << 'EOF'
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useState } from "react";
import { getSales } from "../services/salesApi";

function Sales() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getSales();
      setSales(data);
    }

    load();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Sales</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sales.map((sale) => (
          <div
            key={sale.id}
            className="bg-white p-4 rounded-xl shadow"
          >
            <h2 className="font-bold">{sale.product}</h2>
            <p className="text-gray-600">Amount: KES {sale.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sales;
=======
=======
cat > src/pages/Sales.jsx << 'EOF'
>>>>>>> 25e5c20 (done)
>>>>>>> pages
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSales, addSale, updateSale, deleteSale } from '../redux/salesSlice'
import SalesCard from '../components/SalesCard'
import SearchBar from '../components/SearchBar'
import FormModal from '../components/FormModal'
import LoadingSpinner from '../components/LoadingSpinner'

const empty = { date: '', type: 'Eggs', quantity: '', unitPrice: '', buyer: '' }

export default function Sales() {
  const dispatch = useDispatch()
  const { items, loading } = useSelector(s => s.sales)
  const [search, setSearch] = useState('')
  const [modal, setModal] = useState(false)
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState(empty)
  useEffect(() => { dispatch(fetchSales()) }, [dispatch])
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }))
  const openAdd = () => { setForm(empty); setEditing(null); setModal(true) }
  const openEdit = (s) => { setForm(s); setEditing(s.id); setModal(true) }
  const handleSave = () => {
    if (!form.date || !form.buyer || !form.quantity || !form.unitPrice) return
    const data = { ...form, quantity: Number(form.quantity), unitPrice: Number(form.unitPrice) }
    if (editing) dispatch(updateSale({ id: editing, data }))
    else dispatch(addSale(data))
    setModal(false)
  }
  const filtered = items.filter(s => s.buyer?.toLowerCase().includes(search.toLowerCase()) || s.type?.toLowerCase().includes(search.toLowerCase()))
  const totalRevenue = items.reduce((s, sl) => s + Number(sl.totalKsh || 0), 0)
  const inp = { width: '100%', padding: '8px 10px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '8px', fontSize: '12px', color: '#fff', outline: 'none' }
  if (loading) return <LoadingSpinner />
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div><h1 style={{ fontSize: '18px', fontWeight: 700 }}>Sales Records</h1><p style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.35)', marginTop: '2px' }}>{items.length} records · KSh {totalRevenue.toLocaleString()}</p></div>
        <button onClick={openAdd} style={{ padding: '8px 16px', background: '#16a34a', color: '#fff', borderRadius: '10px', fontSize: '12px', fontWeight: 600, border: 'none', cursor: 'pointer' }}>+ Add Sale</button>
      </div>
      <SearchBar value={search} onChange={setSearch} placeholder="Search by buyer or type..." />
      {filtered.map(s => <SalesCard key={s.id} sale={s} onEdit={openEdit} onDelete={(id) => { if (window.confirm('Delete?')) dispatch(deleteSale(id)) }} />)}
      {filtered.length === 0 && <p style={{ textAlign: 'center', padding: '40px', color: 'rgba(255,255,255,0.25)', fontSize: '12px' }}>No sales found</p>}
      {modal && (
        <FormModal title={editing ? 'Edit Sale' : 'Add Sale'} onClose={() => setModal(false)} onSubmit={handleSave}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div><label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Date</label><input type="date" style={inp} value={form.date} onChange={e => set('date', e.target.value)} /></div>
            <div><label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Type</label><select style={{ ...inp, backgroundColor: '#0a0f0a' }} value={form.type} onChange={e => set('type', e.target.value)}><option>Eggs</option><option>Chicken</option></select></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div><label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Quantity</label><input type="number" style={inp} value={form.quantity} onChange={e => set('quantity', e.target.value)} /></div>
            <div><label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Unit Price (KSh)</label><input type="number" style={inp} value={form.unitPrice} onChange={e => set('unitPrice', e.target.value)} /></div>
          </div>
          <div><label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Buyer</label><input style={inp} value={form.buyer} onChange={e => set('buyer', e.target.value)} placeholder="e.g. Nairobi Market" /></div>
          {form.quantity && form.unitPrice && <p style={{ fontSize: '12px', color: '#86efac' }}>Total: KSh {(Number(form.quantity) * Number(form.unitPrice)).toLocaleString()}</p>}
        </FormModal>
      )}
    </div>
  )
}
<<<<<<< HEAD
EOF
=======
<<<<<<< HEAD
>>>>>>> af2fad795637182c6fe61fcbf18e8c2e3e575839
=======
EOF
>>>>>>> 25e5c20 (done)
>>>>>>> pages
