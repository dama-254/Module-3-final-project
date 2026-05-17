import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Batches from './pages/Batches'
import FeedManagement from './pages/FeedManagement'
import Sales from './pages/Sales'
import Expenses from './pages/Expenses'
import Vaccination from './pages/Vaccination'

function Layout({ children }) {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0f0a', color: '#e8f5e9', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <main style={{ flex: 1, padding: '24px', overflowY: 'auto' }}>
          {children}
        </main>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<ProtectedRoute><Layout><Dashboard /></Layout></ProtectedRoute>} />
      <Route path="/batches" element={<ProtectedRoute><Layout><Batches /></Layout></ProtectedRoute>} />
      <Route path="/feed" element={<ProtectedRoute><Layout><FeedManagement /></Layout></ProtectedRoute>} />
      <Route path="/sales" element={<ProtectedRoute><Layout><Sales /></Layout></ProtectedRoute>} />
      <Route path="/expenses" element={<ProtectedRoute><Layout><Expenses /></Layout></ProtectedRoute>} />
      <Route path="/vaccination" element={<ProtectedRoute><Layout><Vaccination /></Layout></ProtectedRoute>} />
    </Routes>
  )
}
