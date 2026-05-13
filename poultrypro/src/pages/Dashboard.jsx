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