
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import ExpenseData from '../ExpenseData'
import { useState } from 'react'

function App() {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });
const [expenses, setExpenses] = useState(ExpenseData)
const [editingRowId, setEditingRowId] = useState("")
  return (
    <main>
    <h1>Track Your Expense</h1>
    <div className="expense-tracker">
      <ExpenseForm setExpenses={setExpenses} expense={expense} setExpense={setExpense} editingRowId={editingRowId} setEditingRowId={setEditingRowId}/>
      <ExpenseTable expenses={expenses} setExpenses={setExpenses} setExpense={setExpense} setEditingRowId={setEditingRowId}/>
    </div>
  </main>
  )
}

export default App
