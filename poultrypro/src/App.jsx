import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Batches from './pages/Batches'
import FeedManagement from './pages/FeedManagement'
import Sales from './pages/Sales'
import Expenses from './pages/Expenses'
import Vaccination from './pages/Vaccination'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0f0a', color: '#e8f5e9', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <main style={{ flex: 1, padding: '24px', overflowY: 'auto' }}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/batches" element={<Batches />} />
            <Route path="/feed" element={<FeedManagement />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/vaccination" element={<Vaccination />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
