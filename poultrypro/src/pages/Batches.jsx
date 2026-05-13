import { useEffect, useState } from "react";
import { getBatches } from "../services/batchApi";

function Batches() {
  const [batches, setBatches] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getBatches();
      setBatches(data);
    }

    load();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Batches</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {batches.map((batch) => (
          <div
            key={batch.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg"
          >
            <h2 className="font-bold">{batch.batchName}</h2>
            <p className="text-gray-600">Type: {batch.type}</p>
            <p className="text-gray-600">Quantity: {batch.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Batches;