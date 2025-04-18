'use client';

import { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const BudgetContext = createContext();

// Default data
const defaultExpenses = [
  { id: 1, category: 'Transportation', description: 'Flight tickets', amount: 550 },
  { id: 2, category: 'Accommodation', description: 'Hotel (5 nights)', amount: 750 },
  { id: 3, category: 'Food', description: 'Restaurant meals', amount: 300 },
];

const defaultBudget = 2000;

// Provider component
export function BudgetProvider({ children }) {
  // Initialize state from localStorage if available (client-side only)
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(defaultBudget);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedExpenses = localStorage.getItem('expenses');
    const storedBudget = localStorage.getItem('budget');
    
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    } else {
      setExpenses(defaultExpenses);
    }
    
    if (storedBudget) {
      setBudget(parseFloat(storedBudget));
    }
    
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('expenses', JSON.stringify(expenses));
      localStorage.setItem('budget', budget.toString());
    }
  }, [expenses, budget, isLoaded]);

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

  // Add a new expense
  const addExpense = (newExpense) => {
    const expense = {
      id: Date.now(),
      ...newExpense,
      amount: parseFloat(newExpense.amount)
    };
    setExpenses([...expenses, expense]);
  };

  // Delete an expense
  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  // Update the budget
  const updateBudget = (newBudget) => {
    setBudget(parseFloat(newBudget));
  };

  // Make the context values available
  const value = {
    expenses,
    budget,
    totalExpenses,
    remainingBudget,
    expensesByCategory,
    addExpense,
    deleteExpense,
    updateBudget,
  };

  return <BudgetContext.Provider value={value}>{children}</BudgetContext.Provider>;
}

// Custom hook for using this context
export function useBudget() {
  const context = useContext(BudgetContext);
  if (context === undefined) {
    throw new Error('useBudget must be used within a BudgetProvider');
  }
  return context;
} 