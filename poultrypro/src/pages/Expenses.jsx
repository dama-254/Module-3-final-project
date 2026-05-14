
import { useEffect, useState } from "react";
import { getExpenses } from "../services/expenseApi";

function Expenses() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getExpenses();
      setExpenses(data);
    }

    load();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Expenses</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {expenses.map((expense) => (
          <div
            key={expense.id}
            className="bg-white p-4 rounded-xl shadow"
          >
            <h2 className="font-bold">{expense.title}</h2>
            <p className="text-red-500">- KES {expense.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Expenses;

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchExpenses, addExpense, updateExpense, deleteExpense } from '../redux/expenseSlice'
import ExpenseCard from '../components/ExpenseCard'
import SearchBar from '../components/SearchBar'
import FormModal from '../components/FormModal'
import LoadingSpinner from '../components/LoadingSpinner'

const empty = { date: '', description: '', category: 'Feed', amount: '' }

export default function Expenses() {
  const dispatch = useDispatch()
  const { items, loading } = useSelector(s => s.expenses)
  const [search, setSearch] = useState('')
  const [modal, setModal] = useState(false)
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState(empty)
  useEffect(() => { dispatch(fetchExpenses()) }, [dispatch])
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }))
  const openAdd = () => { setForm(empty); setEditing(null); setModal(true) }
  const openEdit = (e) => { setForm(e); setEditing(e.id); setModal(true) }
  const handleSave = () => {
    if (!form.description || !form.amount) return
    const data = { ...form, amount: Number(form.amount) }
    if (editing) dispatch(updateExpense({ id: editing, data }))
    else dispatch(addExpense(data))
    setModal(false)
  }
  const filtered = items.filter(e => e.description?.toLowerCase().includes(search.toLowerCase()) || e.category?.toLowerCase().includes(search.toLowerCase()))
  const total = items.reduce((s, e) => s + Number(e.amount || 0), 0)
  const inp = { width: '100%', padding: '8px 10px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '8px', fontSize: '12px', color: '#fff', outline: 'none' }
  if (loading) return <LoadingSpinner />
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div><h1 style={{ fontSize: '18px', fontWeight: 700 }}>Expenses</h1><p style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.35)', marginTop: '2px' }}>{items.length} records · KSh {total.toLocaleString()}</p></div>
        <button onClick={openAdd} style={{ padding: '8px 16px', background: '#16a34a', color: '#fff', borderRadius: '10px', fontSize: '12px', fontWeight: 600, border: 'none', cursor: 'pointer' }}>+ Add Expense</button>
      </div>
      <SearchBar value={search} onChange={setSearch} placeholder="Search by description or category..." />
      {filtered.map(e => <ExpenseCard key={e.id} expense={e} onEdit={openEdit} onDelete={(id) => { if (window.confirm('Delete?')) dispatch(deleteExpense(id)) }} />)}
      {filtered.length === 0 && <p style={{ textAlign: 'center', padding: '40px', color: 'rgba(255,255,255,0.25)', fontSize: '12px' }}>No expenses found</p>}
      {modal && (
        <FormModal title={editing ? 'Edit Expense' : 'Add Expense'} onClose={() => setModal(false)} onSubmit={handleSave}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div><label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Date</label><input type="date" style={inp} value={form.date} onChange={e => set('date', e.target.value)} /></div>
            <div><label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Category</label><select style={{ ...inp, backgroundColor: '#0a0f0a' }} value={form.category} onChange={e => set('category', e.target.value)}><option>Feed</option><option>Medicine</option><option>Equipment</option><option>Labour</option><option>Other</option></select></div>
          </div>
          <div><label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Description</label><input style={inp} value={form.description} onChange={e => set('description', e.target.value)} placeholder="e.g. Vaccine purchase" /></div>
          <div><label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Amount (KSh)</label><input type="number" style={inp} value={form.amount} onChange={e => set('amount', e.target.value)} /></div>
        </FormModal>
      )}
    </div>
  )
}

