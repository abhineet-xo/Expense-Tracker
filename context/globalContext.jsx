import { createContext, useContext, useState } from 'react';

// Sample transactions used by the frontend while the backend is disconnected.
const sampleIncomes = [
    { _id: 'income-1', title: 'Monthly salary', amount: 65000, date: '2026-10-01', description: 'October salary', type: 'Income', createdAt: '2026-10-01T09:00:00.000Z' },
    { _id: 'income-2', title: 'Freelance project', amount: 12000, date: '2026-10-12', description: 'Website design project', type: 'Income', createdAt: '2026-10-12T11:30:00.000Z' },
    { _id: 'income-3', title: 'Investment return', amount: 2800, date: '2026-10-18', description: 'Mutual fund dividend', type: 'Income', createdAt: '2026-10-18T08:15:00.000Z' },
];

const sampleExpenses = [
    { _id: 'expense-1', title: 'Rent', amount: 18000, date: '2026-10-03', description: 'Monthly apartment rent', type: 'Expense', createdAt: '2026-10-03T10:00:00.000Z' },
    { _id: 'expense-2', title: 'Groceries', amount: 4250, date: '2026-10-08', description: 'Weekly groceries', type: 'Expense', createdAt: '2026-10-08T17:20:00.000Z' },
    { _id: 'expense-3', title: 'Electricity bill', amount: 1650, date: '2026-10-14', description: 'October utility bill', type: 'Expense', createdAt: '2026-10-14T12:00:00.000Z' },
    { _id: 'expense-4', title: 'Dinner', amount: 980, date: '2026-10-21', description: 'Dinner with friends', type: 'Expense', createdAt: '2026-10-21T19:45:00.000Z' },
];

const GlobalStateContext = createContext(null);

export const GlobalStateProvider = ({ children }) => {
    const [incomes, setIncomes] = useState(sampleIncomes);
    const [expenses, setExpenses] = useState(sampleExpenses);
    const [error, setError] = useState(null);

    const addIncome = async (income) => {
        setIncomes((items) => [{
            ...income,
            amount: Number(income.amount) || 0,
            date: income.date || new Date().toISOString(),
            type: 'Income',
            _id: `income-${Date.now()}`,
            createdAt: new Date().toISOString(),
        }, ...items]);
        setError(null);
    };

    const getIncomes = async () => incomes;
    const deleteIncome = async (id) => setIncomes((items) => items.filter((item) => item._id !== id));
    const totalIncome = () => incomes.reduce((total, income) => total + Number(income.amount || 0), 0);

    const addExpense = async (expense) => {
        setExpenses((items) => [{
            ...expense,
            amount: Number(expense.amount) || 0,
            date: expense.date || new Date().toISOString(),
            type: 'Expense',
            _id: `expense-${Date.now()}`,
            createdAt: new Date().toISOString(),
        }, ...items]);
        setError(null);
    };

    const getExpenses = async () => expenses;
    const deleteExpense = async (id) => setExpenses((items) => items.filter((item) => item._id !== id));
    const totalExpenses = () => expenses.reduce((total, expense) => total + Number(expense.amount || 0), 0);
    const totalBalance = () => totalIncome() - totalExpenses();
    const transactionHistory = () => [...incomes, ...expenses]
        .sort((a, b) => new Date(b.createdAt || b.date) - new Date(a.createdAt || a.date))
        .slice(0, 5);

    return (
        <GlobalStateContext.Provider value={{
            incomes, expenses, error, addIncome, getIncomes, deleteIncome, totalIncome,
            addExpense, getExpenses, deleteExpense, totalExpenses, totalBalance,
            transactionHistory, setError,
        }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

export const UseGlobalState = () => {
    const state = useContext(GlobalStateContext);
    if (!state) throw new Error('UseGlobalState must be used inside GlobalStateProvider');
    return state;
};
