import { useState } from "react";
import { addVaccination } from "../services/vaccinationApi";

const VaccinationForm = () => {
  const [formData, setFormData] = useState({
    vaccineName: "",
    batch: "",
    vaccinationDate: "",
    notes: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.vaccineName ||
      !formData.batch ||
      !formData.vaccinationDate
    ) {
      setError("Required fields missing");
      return;
    }

    try {
      await addVaccination(formData);

      setSuccess("Vaccination added successfully");
      setError("");

      setFormData({
        vaccineName: "",
        batch: "",
        vaccinationDate: "",
        notes: "",
      });
    } catch (err) {
      setError("Failed to add vaccination");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Vaccination</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="vaccineName"
          placeholder="Vaccine Name"
          value={formData.vaccineName}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          name="batch"
          placeholder="Batch"
          value={formData.batch}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="date"
          name="vaccinationDate"
          value={formData.vaccinationDate}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          name="notes"
          placeholder="Notes"
          value={formData.notes}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          rows="4"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700"
        >
          Add Vaccination
        </button>
      </form>
    </div>
  );
};

export default VaccinationForm;