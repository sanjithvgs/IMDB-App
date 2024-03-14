// import './../styles/counter.css';
import { useState } from 'react';

const Counter = ({ label, theme }) => {
    const className = `counter-wrapper ${theme}`;
    const [count, setCount] = useState(0);

    const handleIncrease = () => {

        setCount((prevStat)=>{
            return prevStat + 1;
        })
        setCount((prevStat)=>{
            return prevStat + 1;
        })
        setCount((prevStat)=>{
            return prevStat + 1;
        })
        setCount((prevStat)=>{
            return prevStat + 1;
        })
        setCount((prevStat)=>{
            return prevStat + 1;
        })
    
        console.log(count);
    };

    const handleDecrease = () => {
        setCount((prevStat)=>{
            return prevStat - 1;
        })
        setCount((prevStat)=>{
            return prevStat - 1;
        })
        setCount((prevStat)=>{
            return prevStat - 1;
        })
        setCount((prevStat)=>{
            return prevStat - 1;
        })
        setCount((prevStat)=>{
            return prevStat - 1;
        })
    
        console.log(count);
    };

    const handleUpdate = (e) => {
        const val = Number(e.target.value || 0);
        setCount(val);
    }

    return (
        <div className={className}>
            <h1>Counter {label}</h1>
            <div>
                <button onClick={handleDecrease}>-</button>  { /* In JS: onclick="handleDecrease()" */}
                {count}
                <input type="number" placeholder='New Value' value={count} onChange={handleUpdate}/>
                <button  onClick={handleIncrease}>+</button>
            </div>
        </div>
    )
}



export default Counter;