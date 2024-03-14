import logo from './logo.svg';
import './App.css';
import Stopwatch from './components/stopwatch';
import { useState } from 'react';
// import Counter from './components/Counter';

function App() {
  const [visible, changevisible ] = useState(true);

  const toggleVisibility = () =>{
    changevisible((currVisible)=>{
      return !currVisible;
    })
  }

  return (
    <div className="App">
      <input type='checkbox' onChange={toggleVisibility} />Toggle visible

    <div style={{
      display: visible ? 'block' : 'none',
    }}>
      <Stopwatch /> 
    </div>  
    </div>
  );
}
{/* <Counter/> */}
export default App;
