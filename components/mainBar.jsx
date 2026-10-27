import React, { useState } from 'react'
import '../styles/dashBoardCss/mainBar.css'
import  DashboardData  from './Dashboard/DashboardData/DashboardData.jsx'
import { Income } from './Dashboard/IncomeData/IncomeData.jsx'
import Expenses from './Dashboard/ExpensesData/ExpensesData.jsx'
import { Insights } from './Dashboard/Insights/Insights.jsx'

export const MainSection= ({active}) => {
    const displayData = ()=>{
        switch(active){
            case 1:
                return <DashboardData/>
            case 2:
                return <Income/>
            case 3:
                return <Expenses/>
            case 4:
                return <Insights/>
            default: <DashboardData/>
        }

    }
  return (
    <main className='mainSection'>
        {displayData()}   
    </main>
  )
}
