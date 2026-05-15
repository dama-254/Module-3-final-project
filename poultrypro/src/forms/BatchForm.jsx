import { useState } from "react";
import { addBatch } from "../services/batchApi";

const BatchForm = () => {
  const [formData, setFormData] = useState({
    batchName: "",
    birdType: "",
    quantity: "",
    arrivalDate: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.batchName ||
      !formData.birdType ||
      !formData.quantity ||
      !formData.arrivalDate
    ) {
      setMessage("Please fill all fields");
      return;
    }

    try {
      await addBatch(formData);

      setMessage("Batch added successfully");

      setFormData({
        batchName: "",
        birdType: "",
        quantity: "",
        arrivalDate: "",
      });
    } catch (error) {
      console.log(error);
      setMessage("Server connection failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          Poultry Batch Form
        </h1>

        {message && (
          <div className="mb-4 bg-gray-100 text-center p-3 rounded-lg">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 font-semibold">
              Batch Name
            </label>

            <input
              type="text"
              name="batchName"
              value={formData.batchName}
              onChange={handleChange}
              placeholder="Enter batch name"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Bird Type
            </label>

            <input
              type="text"
              name="birdType"
              value={formData.birdType}
              onChange={handleChange}
              placeholder="Layers or Broilers"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Quantity
            </label>

            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="Number of birds"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Arrival Date
            </label>

            <input
              type="date"
              name="arrivalDate"
              value={formData.arrivalDate}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition duration-300"
          >
            Add Batch
          </button>
        </form>
      </div>
    </div>
  );
};

export default BatchForm;