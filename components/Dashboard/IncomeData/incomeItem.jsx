import React from 'react';
import { dateFormat } from '../../../utils/dateformat.js';
import { bitcoin, book, calender, card, circle, clothing, comment, dollar, food, freelance, medical, money, piggy, stocks, takeaway, trash, tv, users, yt } from '../../../src/images/icons/fontaswesome.jsx';
import Button from '../../Button.jsx';
import '../../../styles/dashBoardCss/incomeItem.css'; 
import { IndianRupee } from 'lucide-react';
import { Rupee as Icon, Rupee } from '../../../src/images/icons/icons.jsx';

function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type



    
}) {




   

    return (
        <div className="income-item" style={{ '--indicator-color': indicatorColor }}>
           
            <div className="content">
                <h5>{title}</h5>
                <div className="inner-content">
                    <div className="text">
                        <p><Icon/> {amount}</p>
                        <p>{calender} {dateFormat(date)}</p>
                        <p>
                            {comment}
                            {description}
                        </p>
                    </div>
                    <div className="btn-con">
                        <Button 
                            icon={trash}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'var(--primary-color)'}
                            color={'#fff'}
                            iColor={'#fff'}
                            hColor={'var(--color-green)'}
                            onClick={() => deleteItem(id)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IncomeItem;
