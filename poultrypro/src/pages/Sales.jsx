import { useEffect, useState } from "react";
import { getSales } from "../services/salesApi";

function Sales() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getSales();
      setSales(data);
    }

    load();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Sales</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sales.map((sale) => (
          <div
            key={sale.id}
            className="bg-white p-4 rounded-xl shadow"
          >
            <h2 className="font-bold">{sale.product}</h2>
            <p className="text-gray-600">Amount: KES {sale.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sales;