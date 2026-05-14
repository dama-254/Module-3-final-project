<<<<<<< HEAD

function Navbar() {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      
      <h2 className="text-xl font-semibold text-gray-700">
        Poultry Farm Management System
      </h2>

      <div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Admin
        </button>
      </div>

    </div>
  );
}

export default Navbar;
=======
import { Link, useLocation } from 'react-router-dom'

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
    </nav>
  )
}
>>>>>>> af2fad795637182c6fe61fcbf18e8c2e3e575839
