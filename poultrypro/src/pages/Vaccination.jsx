import { useEffect, useState } from "react";
import { getVaccinations } from "../services/vaccinationApi";

function Vaccinations() {
  const [vaccinations, setVaccinations] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getVaccinations();
      setVaccinations(data);
    }

    load();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Vaccinations</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {vaccinations.map((v) => (
          <div
            key={v.id}
            className="bg-white p-4 rounded-xl shadow"
          >
            <h2 className="font-bold">{v.vaccineName}</h2>
            <p className="text-gray-600">Date: {v.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vaccinations;