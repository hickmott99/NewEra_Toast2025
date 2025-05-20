// import { useState } from 'react';
// import './App.css';

// import Thermometer from './Thermometer.js'

// function App() {
//   useState()

//   return (
//     <div className="App">
//       <div id='header'>
//         <img id="new-era-logo" alt='new-era-logo' src="https://neweracolorado.org/wp-content/uploads/2022/07/NEC_Logo_Primary_Color.png"></img>
//         <div className='header-1'>Toast To Democracy 2025</div>
//       </div>
//       <div id='thermometer-row'>
//         <Thermometer goal={5000} progress={2000} isMonetary={true} title='Dollars Raised'/>
//         <Thermometer goal={10} progress={4000} title='Volunteers'/>        
//       </div>
      
//     </div>
//   );
// }

// export default App;


"use client"

import { useState, useEffect } from "react"
import "./App.css"
import Thermometer from "./Thermometer.js"

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="App">
      <div id="header">
        <img
          id="new-era-logo"
          alt="new-era-logo"
          src="https://neweracolorado.org/wp-content/uploads/2022/07/NEC_Logo_Primary_Color.png"
        ></img>
        <div className="header-1">Toast To Democracy 2025</div>
      </div>
      <div id="thermometer-row">
        <Thermometer goal={5000} progress={2000} isMonetary={true} title="Dollars Raised" />
        <Thermometer goal={10} progress={4} title="Volunteers" />
      </div>
    </div>
  )
}

export default App
