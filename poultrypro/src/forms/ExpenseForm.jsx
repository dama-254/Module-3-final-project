import { useState } from "react";
import { addExpense } from "../services/expenseApi";

const ExpenseForm = () => {
  const [formData, setFormData] = useState({
    expenseName: "",
    amount: "",
    category: "",
    expenseDate: "",
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
      !formData.expenseName ||
      !formData.amount ||
      !formData.category ||
      !formData.expenseDate
    ) {
      setError("All fields are required");
      return;
    }

    try {
      await addExpense(formData);

      setSuccess("Expense added successfully");
      setError("");

      setFormData({
        expenseName: "",
        amount: "",
        category: "",
        expenseDate: "",
      });
    } catch (err) {
      setError("Failed to add expense");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Expense</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="expenseName"
          placeholder="Expense Name"
          value={formData.expenseName}
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
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="date"
          name="expenseDate"
          value={formData.expenseDate}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;