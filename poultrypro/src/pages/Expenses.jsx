import { useEffect, useState } from "react";
import { getExpenses } from "../services/expenseApi";

function Expenses() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getExpenses();
      setExpenses(data);
    }

    load();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Expenses</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {expenses.map((expense) => (
          <div
            key={expense.id}
            className="bg-white p-4 rounded-xl shadow"
          >
            <h2 className="font-bold">{expense.title}</h2>
            <p className="text-red-500">- KES {expense.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Expenses;