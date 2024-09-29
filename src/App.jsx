
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import ExpenseData from '../ExpenseData'
import { useState } from 'react'

function App() {
const [expenses, setExpenses] = useState(ExpenseData)
  return (
    <main>
    <h1>Track Your Expense</h1>
    <div className="expense-tracker">
      <ExpenseForm setExpenses={setExpenses}/>
      <ExpenseTable expenses={expenses}/>
    </div>
  </main>
  )
}

export default App
