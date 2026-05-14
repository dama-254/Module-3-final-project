
import { useEffect, useState } from "react";
import { getBatches } from "../services/batchApi";
import { getSales } from "../services/salesApi";
import { getExpenses } from "../services/expenseApi";
import { getVaccinations } from "../services/vaccinationApi";

function Dashboard() {
  const [batches, setBatches] = useState([]);
  const [sales, setSales] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [vaccinations, setVaccinations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const b = await getBatches();
      const s = await getSales();
      const e = await getExpenses();
      const v = await getVaccinations();

      setBatches(b);
      setSales(s);
      setExpenses(e);
      setVaccinations(v);
    }

    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl shadow">
          <p className="text-gray-500">Batches</p>
          <h2 className="text-2xl font-bold">{batches.length}</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow">
          <p className="text-gray-500">Sales</p>
          <h2 className="text-2xl font-bold">{sales.length}</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow">
          <p className="text-gray-500">Expenses</p>
          <h2 className="text-2xl font-bold">{expenses.length}</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow">
          <p className="text-gray-500">Vaccinations</p>
          <h2 className="text-2xl font-bold">{vaccinations.length}</h2>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBatches } from '../redux/poultrySlice'
import { fetchSales } from '../redux/salesSlice'
import { fetchFeed } from '../redux/feedSlice'
import PoultryCard from '../components/PoultryCard'

export default function Dashboard() {
  const dispatch = useDispatch()
  const batches = useSelector(s => s.batches.items)
  const sales = useSelector(s => s.sales.items)
  const feed = useSelector(s => s.feed.items)
  useEffect(() => { dispatch(fetchBatches()); dispatch(fetchSales()); dispatch(fetchFeed()) }, [dispatch])
  const totalBirds = batches.reduce((s, b) => s + Number(b.birds || 0), 0)
  const totalRevenue = sales.reduce((s, sl) => s + Number(sl.totalKsh || 0), 0)
  const totalFeedCost = feed.reduce((s, f) => s + Number(f.costKsh || 0), 0)
  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '4px' }}>Good morning, <span style={{ color: '#86efac' }}>Farm Manager</span> 👋</h1>
        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>Farm overview · {new Date().toDateString()}</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '10px', marginBottom: '20px' }}>
        <PoultryCard icon="🐔" label="Total Birds" value={totalBirds.toLocaleString()} sub={`${batches.length} batches`} color="#86efac" />
        <PoultryCard icon="💰" label="Total Revenue" value={`KSh ${totalRevenue.toLocaleString()}`} sub={`${sales.length} sales`} color="#c4b5fd" />
        <PoultryCard icon="🌾" label="Feed Cost" value={`KSh ${totalFeedCost.toLocaleString()}`} sub={`${feed.length} records`} color="#93c5fd" />
        <PoultryCard icon="📦" label="Batches" value={batches.length} sub="active batches" color="#fcd34d" />
      </div>
      <div style={{ background: '#0d1f0d', border: '1px solid rgba(134,239,172,0.09)', borderRadius: '14px', padding: '16px' }}>
        <h3 style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>Batch Overview</h3>
        {batches.length === 0 ? <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>No batches yet. Add one from the Batches page.</p> :
          batches.map(b => (
            <div key={b.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>{b.batchId} · {b.breed}</span>
              <span style={{ fontSize: '12px', color: '#86efac' }}>{b.birds} birds</span>
            </div>
          ))}
      </div>
    </div>
  )
}

