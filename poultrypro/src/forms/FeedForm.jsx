import { useState } from "react";
import { addFeed } from "../services/feedApi";

const FeedForm = () => {
  const [formData, setFormData] = useState({
    feedName: "",
    quantity: "",
    supplier: "",
    purchaseDate: "",
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
      !formData.feedName ||
      !formData.quantity ||
      !formData.supplier ||
      !formData.purchaseDate
    ) {
      setError("All fields are required");
      return;
    }

    try {
      await addFeed(formData);

      setSuccess("Feed added successfully");
      setError("");

      setFormData({
        feedName: "",
        quantity: "",
        supplier: "",
        purchaseDate: "",
      });
    } catch (err) {
      setError("Failed to add feed");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Feed</h2>

      {error && (
        <div className="bg-red-100 text-red-600 p-2 rounded mb-3">
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-100 text-green-600 p-2 rounded mb-3">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="feedName"
          placeholder="Feed Name"
          value={formData.feedName}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          name="supplier"
          placeholder="Supplier"
          value={formData.supplier}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="date"
          name="purchaseDate"
          value={formData.purchaseDate}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Add Feed
        </button>
      </form>
    </div>
  );
};

export default FeedForm;