'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function BudgetPage() {
  const [totalBudget, setTotalBudget] = useState(2000);
  const [expenses, setExpenses] = useState([
    { id: 1, category: 'Transportation', description: 'Flight tickets', amount: 550 },
    { id: 2, category: 'Accommodation', description: 'Hotel booking', amount: 750 },
    { id: 3, category: 'Food', description: 'Restaurant budget', amount: 300 },
  ]);

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const remainingBudget = totalBudget - totalExpenses;

  const handleAddExpense = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newExpense = {
      id: Date.now(),
      category: formData.get('category'),
      description: formData.get('description'),
      amount: parseFloat(formData.get('amount'))
    };
    setExpenses([...expenses, newExpense]);
    e.target.reset();
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  return (
    <div className={styles.budgetPage}>
      <header className={styles.header}>
        <h1>Travel Budget</h1>
        <p>Budget Summary</p>
      </header>

      <div className={styles.budgetSummary}>
        <div className={styles.summaryCard}>
          <h2>Total Budget</h2>
          <p>${totalBudget.toFixed(2)}</p>
        </div>
        <div className={styles.summaryCard}>
          <h2>Total Expenses</h2>
          <p>${totalExpenses.toFixed(2)}</p>
        </div>
        <div className={`${styles.summaryCard} ${styles.remaining}`}>
          <h2>Remaining Budget</h2>
          <p>${remainingBudget.toFixed(2)}</p>
        </div>
      </div>

      <div className={styles.addExpense}>
        <h2>Add New Expense</h2>
        <form onSubmit={handleAddExpense} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="category">Category *</label>
            <select id="category" name="category" required>
              <option value="Transportation">Transportation</option>
              <option value="Accommodation">Accommodation</option>
              <option value="Food">Food</option>
              <option value="Activities">Activities</option>
              <option value="Shopping">Shopping</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description">Description *</label>
            <input
              type="text"
              id="description"
              name="description"
              required
              placeholder="Enter expense description"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="amount">Amount ($) *</label>
            <input
              type="number"
              id="amount"
              name="amount"
              required
              min="0"
              step="0.01"
              placeholder="Enter amount"
            />
          </div>
          <button type="submit" className={styles.submitButton}>Add Expense</button>
        </form>
      </div>

      <div className={styles.expensesList}>
        <h2>Your Expenses</h2>
        <div className={styles.categoryBreakdown}>
          {Object.entries(categoryTotals).map(([category, total]) => (
            <div key={category} className={styles.categoryCard}>
              <h3>{category}</h3>
              <p>${total.toFixed(2)}</p>
            </div>
          ))}
        </div>
        {expenses.map(expense => (
          <div key={expense.id} className={styles.expenseItem}>
            <div className={styles.expenseDetails}>
              <div className={styles.expenseCategory}>{expense.category}</div>
              <div>{expense.description}</div>
              <div className={styles.expenseAmount}>${expense.amount.toFixed(2)}</div>
            </div>
            <button
              onClick={() => handleDeleteExpense(expense.id)}
              className={styles.deleteButton}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
} 