'use client';

import { useState } from 'react';
import styles from '../page.module.css';

export default function BudgetPage() {
  const [expenses, setExpenses] = useState([
    { id: 1, category: 'Transportation', description: 'Flight tickets', amount: 550 },
    { id: 2, category: 'Accommodation', description: 'Hotel (5 nights)', amount: 750 },
    { id: 3, category: 'Food', description: 'Restaurant meals', amount: 300 },
  ]);

  const [budget, setBudget] = useState(2000);
  const [newBudget, setNewBudget] = useState('');

  const [newExpense, setNewExpense] = useState({
    category: '',
    description: '',
    amount: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({
      ...newExpense,
      [name]: value
    });
  };

  const handleBudgetChange = (e) => {
    setNewBudget(e.target.value);
  };

  const updateBudget = () => {
    if (newBudget) {
      setBudget(parseFloat(newBudget));
      setNewBudget('');
    }
  };

  const addExpense = (e) => {
    e.preventDefault();
    if (!newExpense.category || !newExpense.description || !newExpense.amount) {
      alert('Please fill in all required fields!');
      return;
    }
    
    const expense = {
      id: Date.now(),
      ...newExpense,
      amount: parseFloat(newExpense.amount)
    };
    
    setExpenses([...expenses, expense]);
    setNewExpense({
      category: '',
      description: '',
      amount: ''
    });
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  // Calculate totals
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  const remainingBudget = budget - totalExpenses;
  
  // Group expenses by category
  const expensesByCategory = expenses.reduce((acc, expense) => {
    const category = expense.category;
    if (!acc[category]) {
      acc[category] = 0;
    }
    acc[category] += expense.amount;
    return acc;
  }, {});

  return (
    <main className={styles.main}>
      <h1>Travel Budget</h1>
      
      <div className={styles.budgetSummary}>
        <h2>Budget Summary</h2>
        <div className={styles.budgetCards}>
          <div className={styles.budgetCard}>
            <h3>Total Budget</h3>
            <p>${budget.toFixed(2)}</p>
            <div className={styles.updateBudget}>
              <input
                type="number"
                value={newBudget}
                onChange={handleBudgetChange}
                placeholder="Enter new budget"
                min="0"
              />
              <button onClick={updateBudget}>Update</button>
            </div>
          </div>
          
          <div className={styles.budgetCard}>
            <h3>Total Expenses</h3>
            <p>${totalExpenses.toFixed(2)}</p>
          </div>
          
          <div className={styles.budgetCard} style={{
            backgroundColor: remainingBudget < 0 ? '#ffdddd' : remainingBudget < budget * 0.2 ? '#ffffdd' : '#ddffdd'
          }}>
            <h3>Remaining Budget</h3>
            <p>${remainingBudget.toFixed(2)}</p>
            {remainingBudget < 0 && <span className={styles.alert}>Over budget!</span>}
          </div>
        </div>
      </div>
      
      <div className={styles.expenseForm}>
        <h2>Add New Expense</h2>
        <form onSubmit={addExpense}>
          <div>
            <label htmlFor="category">Category *</label>
            <select
              id="category"
              name="category"
              value={newExpense.category}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a category</option>
              <option value="Transportation">Transportation</option>
              <option value="Accommodation">Accommodation</option>
              <option value="Food">Food</option>
              <option value="Activities">Activities</option>
              <option value="Shopping">Shopping</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="description">Description *</label>
            <input
              type="text"
              id="description"
              name="description"
              value={newExpense.description}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div>
            <label htmlFor="amount">Amount ($) *</label>
            <input
              type="number"
              id="amount"
              name="amount"
              min="0"
              step="0.01"
              value={newExpense.amount}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <button type="submit">Add Expense</button>
        </form>
      </div>
      
      <div className={styles.expenseList}>
        <h2>Your Expenses</h2>
        {expenses.length === 0 ? (
          <p>No expenses recorded yet. Add your first expense to start tracking!</p>
        ) : (
          <>
            <div className={styles.expenseCategories}>
              <h3>Expenses by Category</h3>
              <div className={styles.categoryBreakdown}>
                {Object.entries(expensesByCategory).map(([category, amount]) => (
                  <div key={category} className={styles.categoryItem}>
                    <span>{category}</span>
                    <span>${amount.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={styles.expenseItems}>
              <h3>All Expenses</h3>
              {expenses.map(expense => (
                <div key={expense.id} className={styles.expenseItem}>
                  <div>
                    <strong>{expense.category}</strong>: {expense.description}
                    <span className={styles.expenseAmount}>${expense.amount.toFixed(2)}</span>
                  </div>
                  <button onClick={() => deleteExpense(expense.id)}>Delete</button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
} 