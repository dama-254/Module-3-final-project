import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import IssuesFeed from './pages/IssuesFeed'
import IssueDetail from './pages/IssueDetail'
import RaiseIssue from './pages/RaiseIssue'
import Analytics from './pages/Analytics'
import Notifications from './pages/Notifications'
import Users from './pages/Users'

export default function App() {
  const user = useSelector(s => s.auth.user)

  return (
    <div className="min-h-screen bg-[#0a0f0a] text-[#e8f5e9] flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <Routes>
            <Route path="/" element={<Navigate to={user ? '/dashboard' : '/login'} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/issues" element={<IssuesFeed />} />
            <Route path="/issues/:id" element={<IssueDetail />} />
            <Route path="/issues/new" element={<RaiseIssue />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
