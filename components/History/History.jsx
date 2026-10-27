// History.jsx
import React from 'react';
import '../../styles/History.css'; // Import the CSS file
import { UseGlobalState } from '../../context/globalContext';

function History() {
    const { transactionHistory } = UseGlobalState();
    const history = transactionHistory(); // Assuming this returns an array

    return (
        <div className="history-container">
            <h2>Recent History</h2>
            {history.map((item) => {
                const { _id, title, amount, type } = item;
                return (
                    <div key={_id} className="history-item">
                        <p style={{
                            color: type === 'Expense' ? 'red' : 'green'
                        }}>
                            {title}
                        </p>

                        <p style={{
                            color: type === 'Expense' ? 'red' : 'Green'
                        }}>
                            {
                                type === 'Expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0 : amount}`
                            }
                        </p>
                    </div>
                );
            })}
        </div>
    );
}

export default History;
