import {useState, useEffect} from 'react';

const Stopwatch = () => {
    const [counter, setCounter] = useState(0);

    useEffect(()=>{
        const intervalRef = setInterval(() =>{
            setCounter((prevCount)=>{
                return prevCount + 1;
            });
        },1000);

        return () => {
            //it will unmount 
            clearInterval(intervalRef);
        }
    },[])

    return(
        <div>
            <h1>Stopwatch</h1>
        {counter}
        </div>
    )
}

export default Stopwatch; 