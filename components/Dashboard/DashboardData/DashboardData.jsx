// 



import React, { useEffect } from 'react';
import { UseGlobalState } from '../../../context/globalContext.jsx';
import History from '../../History/History.jsx';

import Chart from '../Charts/charts.jsx';
import '../../../styles/dashBoardCss/dashboardData.css'; 

function Dashboard() {
    const { totalExpenses, incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = UseGlobalState();

    useEffect(() => {
        getIncomes();
        getExpenses();
    }, [getIncomes, getExpenses]);

    return (
        <div className="dashboard">
                <h1>All Transactions</h1>
                <div className="stats-con">
                <div className="amount-con">
                    <div className="income">
                        <h3>Total Income</h3>
                        <span className='result-con'><p>
                         {totalIncome()}
                        </p></span>
                         </div>
                    
                    <div className="expense">
                        <h3>Total Expense</h3>
                        <p>
                            {totalExpenses()}
                        </p> </div>
                    
                    <div className="balance">
                        <h3>Total Balance</h3>
                        <p>
                        {totalBalance()}
                        </p> </div>        
                </div>
                <div className="history-con">
                    <History />
                        
                </div>
                
                </div>
        </div>
    );
}

export default Dashboard;