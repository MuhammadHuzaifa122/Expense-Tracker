import React, { useEffect, useRef, useState } from "react";
import Input from "./Input";
import SelectMenu from "./SelectMenu";

export default function ExpenseForm({ setExpenses, setExpense, expense }) {
  const [errors, setErrors] = useState({});

  const validationConfig = {
    title: [{ required: true, message: "Title is required" }, {minLength: 3, message: "Title must be at least 3 characters"}],
    category: [{ required: true, message: "Category is required" }],
    amount: [{ required: true, message: "Amount is required" }],
  }

  const validate = (formData) => {
    const errorData = {}

    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
        if (rule.required && !value) {
          errorData[key] = rule.message
          return true
        }
        if (rule.minLength && value.length < 3) {
          errorData[key] = rule.message
          return true
        }
      })
    })

    setErrors(errorData);
    return errorData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateResult = validate(expense);

    if (Object.keys(validateResult).length) return;

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);
    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevState) => ({ ...prevState, [name]: value }));
    setErrors({});
  };
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input
        label="Title"
        id="title"
        name="title"
        value={expense.title}
        onChange={handleChange}
        error={errors.title}
      />
      <SelectMenu
       label="Category"
        id="category"
        name="category"
        value={expense.category}
        onChange={handleChange}
        options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
        defaultOption = 'Select Category'
        error={errors.category}
      />
      <Input
        label="Amount"
        id="amount"
        name="amount"
        value={expense.amount}
        onChange={handleChange}
        error={errors.amount}
      />
      <p className="error">{errors.amount}</p>

      <button className="add-btn">Add</button>
    </form>
  );
}
