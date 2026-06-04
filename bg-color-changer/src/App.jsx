import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>

      <div className="duration-200" bg>
  
        <button onClick={()=>{setColor('Black')}}>black</button>
        </div>
      <div className="duration-200" bg>
  
        <button onClick={()=>{setColor('yellow')}}>yellow</button>
      </div>
      <div className=" duration-200" bg>
  
        <button onClick={()=>{setColor('blue')}}>Blue</button>
      </div>
      <div className="w-full h-screen duration-200" bg>
  
        <button onClick={()=>{setColor('Pink')}}>pink</button>
        </div>
     
    </div>
  )
}

export default App
