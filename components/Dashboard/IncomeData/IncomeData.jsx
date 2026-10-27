import React, { useEffect, useCallback } from 'react';
import { UseGlobalState} from '../../../context/globalContext.jsx'; 

import {Form} from './IncomeForm.jsx';
import IncomeItem from './incomeItem.jsx';
import '../../../styles/dashBoardCss/income.css'; 
import { InnerLayout } from '../../layout.js';


export const Income=()=> {
    const { incomes, getIncomes, deleteIncome, totalIncome } = UseGlobalState();

    const fetchIncomes = useCallback(() => {
        getIncomes();
    }, [getIncomes]);

    useEffect(() => {
        fetchIncomes();
    }, [fetchIncomes]);


    return (
        <div className="income-styled">


            <InnerLayout>

                <h1>Incomes</h1>

                <h2 className="total-income">
                    Total Income: <span>${totalIncome()}</span>
                </h2>


                <div className="income-content">

                    <div className="form-container">
                        <Form />
                    </div>

                    <div className="incomes">
                        {incomes.map((income) => {
                            const { _id, title, amount, date,  description, type } = income;
                            
                            return (
                                <IncomeItem
                                    key={_id}
                                    id={_id}
                                    title={title}
                                    description={description}
                                    amount={amount}
                                    date={date}
                                    type={type}
                                    indicatorColor="var(--color-green)"
                                    deleteItem={deleteIncome}
                                />
                            );
                        })}
                    </div>


                </div>

            </InnerLayout>
        </div>
    );
}





