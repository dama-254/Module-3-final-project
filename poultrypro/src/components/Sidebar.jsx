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