import { useState } from "react";
import { addSale } from "../services/salesApi";

const SalesForm = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    product: "",
    amount: "",
    saleDate: "",
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
      !formData.customerName ||
      !formData.product ||
      !formData.amount ||
      !formData.saleDate
    ) {
      setError("All fields are required");
      return;
    }

    try {
      await addSale(formData);

      setSuccess("Sale added successfully");
      setError("");

      setFormData({
        customerName: "",
        product: "",
        amount: "",
        saleDate: "",
      });
    } catch (err) {
      setError("Failed to add sale");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Sale</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          value={formData.customerName}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          name="product"
          placeholder="Product"
          value={formData.product}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="date"
          name="saleDate"
          value={formData.saleDate}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-yellow-600 text-white py-3 rounded-lg hover:bg-yellow-700"
        >
          Add Sale
        </button>
      </form>
    </div>
  );
};

export default SalesForm;