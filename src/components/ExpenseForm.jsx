import React, { useEffect, useRef, useState } from "react";

export default function ExpenseForm({ setExpenses }) {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const[errors, setErrors] = useState({})

  const validate = (formData) =>{
    console.log(formData);
    const errorData = {}
    if (!formData.title) {
      errorData.title = "Title is required";
    }
    if (!formData.category) {
      errorData.category = "Category is required";
    }
    if (!formData.amount) {
      errorData.amount = "Amount is required";
    }
    setErrors(errorData)
    return errorData
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const validateResult = validate(expense)

    if(Object.keys(validateResult).length) return
    
    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);
    setExpense({
      title: "",
      category: "",
      amount: "",
    });
    
    // using useRef()
    // const titleRef = useRef(null);
    // const categoryRef = useRef(null);
    // const amountRef = useRef(null);
    // setExpenses((prevState) => [
    //   ...prevState,
    //   {
    //     title: titleRef.current.value,
    //     category: categoryRef.current.value,
    //     amount: amountRef.current.value,
    //     id: crypto.randomUUID(),
    //   },
    // ]);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevState) => ({ ...prevState, [name]: value }))
    setErrors({})
  };
  return (
    <form className="expense-htmlForm" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={expense.title}
          onChange={handleChange}
          // ref={titleRef}
          />
        <p className="error">{errors.title}</p>
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={expense.category}
          onChange={handleChange}
          // ref={categoryRef}
        >
          <option value="" hidden>
            Select Category
          </option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
        <p className="error">{errors.category}</p>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
          // ref={amountRef}
        />
         <p className="error">{errors.amount}</p>
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
