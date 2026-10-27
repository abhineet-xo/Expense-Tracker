import { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://expense-tracker-backend-indol-beta.vercel.app/api/';

export const UseGlobalState = () => {
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getIncomes();
        getExpenses();
    }, []);

    const addIncome = async (income) => {
        try {
            const incomeData = { ...income, type: 'Income' }; // Add the type property
            await axios.post(`${BASE_URL}incomes`, incomeData);
            getIncomes();
        } catch (err) {
            setError(err.response ? err.response.data.message : 'Error adding income');
        }
    };

    const getIncomes = async () => {
        try {
            const response = await axios.get(`${BASE_URL}incomes`);
            setIncomes(response.data);
        } catch (err) {
            setError(err.response ? err.response.data.message : 'Error fetching incomes');
        }
    };

    const deleteIncome = async (id) => {
        try {
            await axios.delete(`${BASE_URL}incomes/${id}`);
            getIncomes();
        } catch (err) {
            setError(err.response ? err.response.data.message : 'Error deleting income');
        }
    };

    const totalIncome = () => {
        return incomes.reduce((total, income) => total + income.amount, 0);
    };

    const addExpense = async (expense) => {
        try {
            const expenseData = { ...expense, type: 'Expense' }; // Add the type property
            await axios.post(`${BASE_URL}expenses`, expenseData);
            getExpenses();
        } catch (err) {
            setError(err.response ? err.response.data.message : 'Error adding expense');
        }
    };

    const getExpenses = async () => {
        try {
            const response = await axios.get(`${BASE_URL}expenses`);
            setExpenses(response.data);
        } catch (err) {
            setError(err.response ? err.response.data.message : 'Error fetching expenses');
        }
    };

    const deleteExpense = async (id) => {
        try {
            await axios.delete(`${BASE_URL}expenses/${id}`);
            getExpenses();
        } catch (err) {
            setError(err.response ? err.response.data.message : 'Error deleting expense');
        }
    };

    const totalExpenses = () => {
        return expenses.reduce((total, expense) => total + expense.amount, 0);
    };

    const totalBalance = () => {
        return totalIncome() - totalExpenses();
    };

    const transactionHistory = () => {
        const history = [...incomes, ...expenses];
        history.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        return history.slice(0, 5);
    };

    return {
        incomes,
        expenses,
        error,
        addIncome,
        getIncomes,
        deleteIncome,
        totalIncome,
        addExpense,
        getExpenses,
        deleteExpense,
        totalExpenses,
        totalBalance,
        transactionHistory,
        setError,
    };
};
