<<<<<<< HEAD
<<<<<<< HEAD
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white p-5">
      
      <h1 className="text-2xl font-bold mb-10">
        Poultry Farm
      </h1>

      <div className="flex flex-col gap-4">

        <NavLink to="/">Dashboard</NavLink>

        <NavLink to="/batches">Batches</NavLink>

        <NavLink to="/feeds">Feeds</NavLink>

        <NavLink to="/vaccinations">
          Vaccinations
        </NavLink>

        <NavLink to="/sales">Sales</NavLink>

        <NavLink to="/expenses">Expenses</NavLink>

      </div>
    </div>
  );
}

export default Sidebar;
=======
=======
>>>>>>> ea26a2ab0958faec2ee5c81d381ed980117ae081
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/dashboard', icon: '🏠', label: 'Dashboard' },
  { to: '/batches', icon: '🐣', label: 'Batches' },
  { to: '/feed', icon: '🌾', label: 'Feed' },
  { to: '/sales', icon: '💰', label: 'Sales' },
  { to: '/expenses', icon: '💸', label: 'Expenses' },
  { to: '/vaccination', icon: '💉', label: 'Vaccination' },
]

export default function Sidebar() {
  return (
    <aside style={{ width: '52px', background: '#0d1a0d', borderRight: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px 0', gap: '4px', position: 'sticky', top: '56px', height: 'calc(100vh - 56px)' }}>
      {links.map(({ to, icon, label }) => (
        <NavLink key={to} to={to} title={label} style={({ isActive }) => ({ width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', textDecoration: 'none', background: isActive ? 'rgba(22,163,74,0.2)' : 'transparent' })}>
          {icon}
        </NavLink>
      ))}
    </aside>
  )
}
<<<<<<< HEAD
>>>>>>> af2fad795637182c6fe61fcbf18e8c2e3e575839
=======
>>>>>>> ea26a2ab0958faec2ee5c81d381ed980117ae081
