import { NavLink } from "react-router-dom";

const links = [
  { to: "/", icon: "🏠", label: "Dashboard" },
  { to: "/batches", icon: "🐣", label: "Batches" },
  { to: "/feeds", icon: "🌾", label: "Feeds" },
  { to: "/sales", icon: "💰", label: "Sales" },
  { to: "/expenses", icon: "💸", label: "Expenses" },
  { to: "/vaccinations", icon: "💉", label: "Vaccinations" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-5 flex flex-col shadow-xl">
      <div className="mb-10 px-2">
        <h1 className="text-2xl font-bold tracking-tight text-green-500">
          Poultry Farm
        </h1>
        <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">
          Management System
        </p>
      </div>

      <nav className="flex flex-col gap-2">
        {links.map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-green-600 text-white shadow-lg shadow-green-900/20"
                  : "hover:bg-slate-800 text-slate-400 hover:text-white"
              }`
            }
          >
            <span className="text-xl">{icon}</span>
            <span className="font-medium">{label}</span>
          </NavLink>
        ))}
      </nav>
      
      <div className="mt-auto pt-5 border-t border-slate-800">
        <button className="flex items-center gap-3 p-3 w-full text-slate-400 hover:text-red-400 transition-colors">
          <span>🚪</span>
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}