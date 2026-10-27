
import React, { useEffect, useCallback } from 'react';
import { UseGlobalState } from '../../../context/globalContext.jsx'; 
import { InnerLayout } from '../../layout';
import ExpenseForm from './ExpenseForm';
import IncomeItem from '../IncomeData/incomeItem';
import '../../../styles/dashBoardCss/expenseData.css'; 

export const ExpensesData = () => {
  return (
    <div>ExpensesData</div>
  )
}


function Expenses() {
    const { expenses, getExpenses, deleteExpense, totalExpenses } = UseGlobalState(); 

    const fetchExpense = useCallback(() => {
        getExpenses();
    }, [getExpenses]);

    useEffect(() => {
        fetchExpense();
    }, [fetchExpense]);


    return (
        <div className="expense-styled">
            <InnerLayout>
                <h1>Expenses</h1>
                <h2 className="total-income">
                    Total Expense: <span>${totalExpenses()}</span>
                </h2>
                <div className="income-content">
                    <div className="form-container">
                        <ExpenseForm />
                    </div>
                    <div className="incomes">
                        {expenses.length > 0 ? ( // Check if expenses exist before mapping
                            expenses.map((expense) => {
                                const { _id, title, amount, date, description, type } = expense;
                                console.log("id is ",_id)
                                return (
                                    <IncomeItem
                                        key={_id}
                                        id={_id}
                                        title={title}
                                        description={description}
                                        amount={amount}
                                        date={date}
                                        type={type}
                                        indicatorColor="red"
                                        deleteItem={deleteExpense}
                                    />
                                );
                            })
                        ) : (
                            <p>No expenses available.</p> // Fallback message if no expenses
                        )}
                    </div>
                </div>
            </InnerLayout>
        </div>
    );
}

export default Expenses;
