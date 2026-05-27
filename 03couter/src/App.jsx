/* eslint-disable react-hooks/immutability */
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = ()=>{
    counter = counter+1
    setCounter(counter)
    console.log("Value Added", counter);
  };
  const removeValue = ()=>{
    counter = counter-1
    setCounter(counter)
    console.log("Value removed", counter);
  };

  return (
    <>
    
      <h1>Hello Mayank!</h1>
      <h3>Counter : {counter}</h3>
      <button onClick={addValue}>Add value </button>
      <br></br>
      <button onClick={removeValue}>Remove value</button>    
        
    </>
  )
}

export default App
