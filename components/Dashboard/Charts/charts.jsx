// import React from 'react';
// import {
//     Chart as ChartJs,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
//     ArcElement,
// } from 'chart.js';

// import { Line } from 'react-chartjs-2';
// import styled from 'styled-components';
// import { UseGlobalState } from '../../../context/globalContext.jsx';
// import { dateFormat } from '../../../utils/dateformat.js';

// ChartJs.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
//     ArcElement
// );

// function Chart() {
//     const { incomes, expenses } = UseGlobalState();

//     const roundToNearest50 = (value) => {
//         return Math.round(value / 50) * 50;
//     };

//     const data = {
//         labels: incomes.map((inc) => {
//             const { date } = inc;
//             return dateFormat(date);
//         }),
//         datasets: [
//             {
//                 label: 'Income',
//                 data: incomes.map((income) => roundToNearest50(income.amount)),
//                 backgroundColor: 'rgba(75, 192, 192, 0.2)', // Light teal background
//                 borderColor: 'rgba(75, 192, 192, 1)', // Teal line
//                 borderWidth: 4, // Thicker line
//                 pointBackgroundColor: 'rgba(75, 192, 192, 1)', // Point color
//                 pointBorderColor: '#fff', // Point border color
//                 pointBorderWidth: 2, // Point border thickness
//                 pointRadius: 5, // Point size
//                 tension: 0.6, // Smoothness of the line
//             },
//             {
//                 label: 'Expenses',
//                 data: expenses.map((expense) => roundToNearest50(expense.amount)),
//                 backgroundColor: 'rgba(255, 99, 132, 0.2)', // Light red background
//                 borderColor: 'rgba(255, 99, 132, 1)', // Red line
//                 borderWidth: 4, // Thicker line
//                 pointBackgroundColor: 'rgba(255, 99, 132, 1)', // Point color
//                 pointBorderColor: '#fff', // Point border color
//                 pointBorderWidth: 2, // Point border thickness
//                 pointRadius: 5, // Point size
//                 tension: 0.4, // Smoothness of the line
//             },
//         ],
//     };

//     return (
//         <ChartStyled>
//             <Line data={data} />
//         </ChartStyled>
//     );
// }

// const ChartStyled = styled.div`
//     background: #FCF6F9;
//     border: 2px solid #FFFFFF;
//     box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
//     padding: 1rem;
//     border-radius: 20px;
//     height: 400px
// `;

// export default Chart;







import React from 'react';
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';

import { Line, Pie } from 'react-chartjs-2';
import styled from 'styled-components';
import { UseGlobalState } from '../../../context/globalContext.jsx';
import { dateFormat } from '../../../utils/dateformat.js';

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

function Chart() {
    const { incomes, expenses } = UseGlobalState();

    const roundToNearest50 = (value) => {
        return Math.round(value / 50) * 50;
    };

    // Data for Line Chart
    const lineData = {
        labels: incomes.map((inc) => {
            const { date } = inc;
            return dateFormat(date);
        }),
        datasets: [
            {
                label: 'Income',
                data: incomes.map((income) => roundToNearest50(income.amount)),
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Light teal background
                borderColor: 'rgba(75, 192, 192, 1)', // Teal line
                borderWidth: 4, // Thicker line
                pointBackgroundColor: 'rgba(75, 192, 192, 1)', // Point color
                pointBorderColor: '#fff', // Point border color
                pointBorderWidth: 2, // Point border thickness
                pointRadius: 5, // Point size
                tension: 0.6, // Smoothness of the line
            },
            {
                label: 'Expenses',
                data: expenses.map((expense) => roundToNearest50(expense.amount)),
                backgroundColor: 'rgba(255, 99, 132, 0.2)', // Light red background
                borderColor: 'rgba(255, 99, 132, 1)', // Red line
                borderWidth: 4, // Thicker line
                pointBackgroundColor: 'rgba(255, 99, 132, 1)', // Point color
                pointBorderColor: '#fff', // Point border color
                pointBorderWidth: 2, // Point border thickness
                pointRadius: 5, // Point size
                tension: 0.4, // Smoothness of the line
            },
        ],
    };

    // Data for Pie Chart
    const pieData = {
        labels: ['Total Income', 'Total Expenses'],
        datasets: [
            {
                label: 'Income vs Expenses',
                data: [
                    incomes.reduce((total, income) => total + roundToNearest50(income.amount), 0),
                    expenses.reduce((total, expense) => total + roundToNearest50(expense.amount), 0),
                ],
                backgroundColor: [
                    'rgba(75, 192, 192, 1)', // Teal for income
                    'rgba(255, 99, 132, 1)', // Red for expenses
                ],
                borderWidth: 1,
                hoverOffset: 4,
            },
        ],
    };

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Income vs Expenses',
                font: {
                    size: 20,
                    weight: 'bold',
                },
                color: '#333',
                padding: {
                    bottom: 20,
                },
            },
        },
        maintainAspectRatio: false, // Allow the chart to fill the container
        responsive: true, // Enable responsiveness
    };

    return (
        <ChartContainer>
            <LineChartContainer>
                <Line data={lineData} options={options} />
            </LineChartContainer>
            <PieChartContainer>
                <Pie data={pieData} options={options} />
            </PieChartContainer>
        </ChartContainer>
    );
}

const ChartContainer = styled.div`
    display: flex;
    gap: 20px; // Space between charts
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 400px;
`;

const LineChartContainer = styled.div`
    flex: 2; // Line chart takes 2/3 of the width
`;

const PieChartContainer = styled.div`
    flex: 1; // Pie chart takes 1/3 of the width
`;

export default Chart;
