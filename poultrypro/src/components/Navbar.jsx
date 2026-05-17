import { Link, useLocation, useNavigate } from 'react-router-dom'

const links = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/batches', label: 'Batches' },
  { to: '/feed', label: 'Feed' },
  { to: '/sales', label: 'Sales' },
  { to: '/expenses', label: 'Expenses' },
  { to: '/vaccination', label: 'Vaccination' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const user = localStorage.getItem('pf_user') || 'User'

  const handleLogout = () => {
    localStorage.removeItem('pf_auth')
    localStorage.removeItem('pf_user')
    navigate('/login')
  }

  return (
    <nav style={{ background: '#0d1f0d', borderBottom: '1px solid rgba(134,239,172,0.1)', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: '22px' }}>🐔</span>
        <span style={{ fontWeight: 700, fontSize: '15px', color: '#86efac' }}>PoultryPro</span>
      </div>
      <div style={{ display: 'flex', gap: '4px' }}>
        {links.map(({ to, label }) => (
          <Link key={to} to={to} style={{ padding: '6px 14px', borderRadius: '8px', fontSize: '12px', textDecoration: 'none', fontWeight: pathname === to ? 600 : 400, background: pathname === to ? 'rgba(22,163,74,0.15)' : 'transparent', color: pathname === to ? '#86efac' : 'rgba(255,255,255,0.5)' }}>
            {label}
          </Link>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>👤 {user}</span>
        <button onClick={handleLogout} style={{ padding: '6px 14px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', color: '#fca5a5', borderRadius: '8px', fontSize: '12px', cursor: 'pointer' }}>
          Logout
        </button>
      </div>
    </nav>
  )
}
