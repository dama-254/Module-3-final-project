import { NavLink } from "react-router-dom"

const links = [
  { to: "/dashboard", icon: "🏠", label: "Dashboard" },
  { to: "/batches", icon: "🐣", label: "Batches" },
  { to: "/feed", icon: "🌾", label: "Feed" },
  { to: "/sales", icon: "💰", label: "Sales" },
  { to: "/expenses", icon: "💸", label: "Expenses" },
  { to: "/vaccination", icon: "💉", label: "Vaccination" },
]

export default function Sidebar() {
  return (
    <aside style={{ width: "52px", background: "#0d1a0d", borderRight: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", alignItems: "center", padding: "12px 0", gap: "4px", position: "sticky", top: "56px", height: "calc(100vh - 56px)" }}>
      {links.map(({ to, icon, label }) => (
        <NavLink key={to} to={to} title={label} style={({ isActive }) => ({ width: "36px", height: "36px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", textDecoration: "none", background: isActive ? "rgba(22,163,74,0.2)" : "transparent" })}>
          {icon}
        </NavLink>
      ))}
    </aside>
  )
}
