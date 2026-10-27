
import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
import { UseGlobalState} from '../../../context/globalContext.jsx'; 
import '../../../styles/dashBoardCss/form.css';
import Button from '../../Button.jsx';
import { useState } from 'react';

export const Form = ()=> {

    const { addIncome, error, setError, getIncomes } = UseGlobalState(); 
    const [inputState, setInputState] = useState({ 
        title: '',    
        amount: '',
        date: '',

        description: '',
    });

    const { title, amount, date, description } = inputState;

    const handleInput = (name) => e => {

        setInputState({ ...inputState, [name]: e.target.value });
        setError(''); 


    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        await addIncome(inputState); 
        setInputState({
            title: '',
            amount: '',
            date: null, 

            description: '',
        }); 
    };



    return (
        <form className="form" onSubmit={handleSubmit}>
            {error && <p className='error'>{error}</p>} {}
            <div className="input-control">
                <input 
                    type="text" 
                    value={title}
                    name={'title'} 
                    placeholder="Salary Title"
                    onChange={handleInput('title')}
                />
            </div>
            <div className="input-control">
                <input 
                    value={amount}  
                    type="text" 
                    name={'amount'} 
                    placeholder={'Salary Amount'}
                    onChange={handleInput('amount')} 
                />
            </div>
            <div className="input-control">
                <DatePicker 
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => {
                        setInputState({ ...inputState, date: date });
                    }}

                />
            </div>

            <div className="input-control">
                <textarea 
                    name="description" 
                    value={description} 
                    placeholder='Add A Reference' 
                    id="description" 
                    cols="30" 
                    rows="2" 
                    onChange={handleInput('description')}
                ></textarea>
            </div>
            <div className="submit-btn">
                <Button 
                    name={'Add Income'}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent)'}
                    color={'#fff'}
                    bb={"1px solid rgba(34, 34, 96, 0.9)"}
                />
            </div>
        </form>
 

);


}

